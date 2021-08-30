import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { RegistrationService, ApiImage } from '../services/registration.service';
import { StorageService } from '../services/storage.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth.service';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export interface imgFile {
  name: string;
  filepath: string;
  size: number;
}


@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.page.html',
  styleUrls: ['./registrations.page.scss'],
})
export class RegistrationsPage implements OnInit {
  areaOfInterst: any = [];
  gst_certificate_File: any;
  pan_card_File: any;
  reg_certificate_File: any;
  adhaar_File: any;
  workLocations = [];
  states: any;
  districts: any[];
  work_districts: any;
  work_talukas: any;
  talukas: any[];
  isLoading = false;
  accessToken: any;
  username: string;
  imageUrl: string;
  RegimageUrl: string;
  PanimageUrl: string;
  AdhaarimageUrl: string;
  userId: string;
  toggleDisplay = false;
  uname: string;
  cname: string;
  addr: string;
  area_of_interest: [];
  stateValue = '';
  districtValue = [];
  talukaValue = [];
  gst_num: string;
  reg_num: string;
  pan_num: string;
  adhaar_num: string;
  compareWith: any;
  // toggle.contact = false;
  interested = [];
  iLikeIt = { isChecked: false };
  user: any;
  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(private router: Router, private registrationService: RegistrationService, private storageService: StorageService,
    private alertCtrl: AlertController,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private authService: AuthService,
    private filePath: FilePath,
    private file: File

  ) { }


  compareWithFn = (o1, o2) => o1 && o2 ? o1.id === o2.id : o1 === o2;


  ngOnInit() {

    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);

      if (res) {

        this.accessToken = res.token;
        this.username = res.name;
        this.userId = res.id;

        this.loadAllData();
      } else {
        this.router.navigate(['auth']);
      }
    });
    this.compareWith = this.compareWithFn;


  }
  addPreferedLocation() {
    // console.log(this.states.find(x => x.id === this.stateValue));
    const location = {
      state: this.states.find(x => x.id === this.stateValue).name,
      district: this.getdistricts(),
      taluka: this.getTalukas(),
    };
    this.workLocations.push(location);
    this.stateValue = null;
    this.districtValue = this.talukaValue = [];
  }
  getdistricts() {
    const districtArray = [];
    this.districtValue.forEach(dist => {
      // get district name
      const name = this.work_districts.find(x => x.id === dist).name;
      districtArray.push(name);
    });
    return districtArray;
  }
  getTalukas() {
    const talukaArray = [];
    this.talukaValue.forEach(talukaID => {
      console.log(this.work_talukas);
      console.log(this.work_talukas.find(x => x.id === talukaID));
      // get taluka name
      const name = this.work_talukas.find(x => x.id === talukaID).name;
      talukaArray.push(name);
    });
    return talukaArray;
  }
  removeLocation(index) {
    // console.log(index);
    this.workLocations.splice(index, 1);
  }
  loadAllData() {



    this.registrationService.get_states(this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.states = response.data;
        //   this.storageService.store('categories', response.data);

      }
    });

    this.authService.user_details({ user_id: this.userId }, this.accessToken).subscribe(response => {


      if (response.status == 'success') {


        this.user = response.data;

        this.uname = response.data.name;
        this.cname = response.data.cname;
        this.addr = response.data.addr;
        this.area_of_interest = this.interested = JSON.parse(response.data.area_of_interest);
        this.stateValue = response.data.state;

        this.districtValue = response.data.district;
        this.talukaValue = response.data.taluka;
        this.gst_num = response.data.gst_num;
        this.reg_num = response.data.reg_num;
        this.pan_num = response.data.pan_num;
        this.adhaar_num = response.data.adhaar_num;

        this.workLocations = response.data.locations;


      }


      //  console.log(this.user);

    });



    this.registrationService.get_categories(this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.areaOfInterst = response.data;
        this.isLoading = false;


      }
    });


  }



  onStateChange(event: any, field) {
    const stateID = event.target.value;
    console.log('stateID', stateID);
    this.registrationService.get_districts(stateID, this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        if (field == 'address') {
          this.districts = response.data;
        } else {
          this.work_districts = response.data;
          console.log(this.work_districts);
        }

      }
    }, error => console.log(error));
  }

  onDistrictChange(event: any, field) {
    const districtId = event.target.value;
    console.log('districtId', districtId);
    this.registrationService.get_talukas(districtId, this.accessToken).subscribe((response) => {
      if (response.status === 'success') {

        if (field === 'address') {
          this.talukas = response.data;
        } else {
          this.work_talukas = response.data;
          console.log('work_talukas', this.work_talukas);
        }
      }
    }, error => console.log(error));
  }

  toggleOtherField() {
    this.toggleDisplay = !this.toggleDisplay;

  }

  onSelect(selectedVal: string) {
    this.interested.push(selectedVal);
  }

  async selectImageSource(fileName: string) {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'Camera',
        handler: () => {
          this.addImage(CameraSource.Camera, fileName);
        }
      },
      {
        text: 'Choose from Gallery',
        icon: 'Image',
        handler: () => {
          this.addImage(CameraSource.Photos, fileName);
        }
      }
    ];

    if (this.platform.is('pwa')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }

    // for android
    if (this.platform.is('android')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.registrationService.selectFile()
            .then(uri => {
              this.makeBlobFromURI(uri, fileName);
            })
            .catch(err => console.log(err));
        }
      });
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();


  }

  updateImagePreview(fileName: string, image: any) {
    if (fileName === 'gst_certificate') {
      this.imageUrl = image;
    }
    if (fileName === 'reg_certificate') {
      this.RegimageUrl = image;
    }
    if (fileName === 'pan_card') {
      this.PanimageUrl = image;
    }
    if (fileName === 'adhaar_file') {
      this.AdhaarimageUrl = image;
    }
  }
  updatedocumentLink(fileName, url) {
    if (fileName === 'gst_certificate') {
      this.gst_certificate_File = url;
    }
    if (fileName === 'reg_certificate') {
      this.reg_certificate_File = url;
    }
    if (fileName === 'pan_card') {
      this.pan_card_File = url;
    }
    if (fileName === 'adhaar_file') {
      this.adhaar_File = url;
    }
  }

  async addImage(source: CameraSource, fileName: string) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });

    try {

      const imgUrl = 'data:image/jpeg;base64,' + image.base64String;
      this.updateImagePreview(fileName, imgUrl);
      this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage: ApiImage) => {
        this.images.push(newImage);
      });
    }
    catch (error) {

    }


  }

  // Used for browser direct file upload
  uploadFile(event: Event, fieldName) {
    const file = (event.target as HTMLInputElement).files[0];
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();


      if (fieldName === 'gst_certificate') {
        this.imageUrl = dataUrl;
      }



      if (fieldName === 'reg_certificate') {
        this.RegimageUrl = dataUrl;
      }



      if (fieldName === 'pan_card') {
        this.PanimageUrl = dataUrl;
      }


      if (fieldName === 'adhaar_file') {
        this.AdhaarimageUrl = dataUrl;
      }

      this.registrationService.uploadImageFile(this.imageUrl, this.accessToken, fieldName, this.userId).subscribe((newImage: ApiImage) => {
        this.images.push(newImage);
      });
    };

    // fr.readAsDataURL(file);

  }


  base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = window.atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);

    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
  }


  onSubmit(form: NgForm) {

    //  console.log(form.value); return false;
    const postData = {
      name: form.value.uname,
      company: form.value.company,
      area_of_interest: this.interested,
      address: form.value.address,
      state: form.value.state,
      district: form.value.district,
      taluka: form.value.taluka,
      gst_num: form.value.gst_num,
      reg_num: form.value.reg_num,
      pan_num: form.value.pan_num,
      adhaar_num: form.value.adhaar_num,
      user_id: this.userId,

    };

    // let formData = new FormData();

    // formData.append("photo", this.file, this.file.name);

    // this.http.post("http://localhost:3000/upload", formData).subscribe((response) => {
    //   console.log(response);
    // });


    this.registrationService.register(postData, this.accessToken).subscribe(response => {

      if (response.status == 'success') {
        this.router.navigateByUrl('/registration-thankyou');
      } else {
        this.showAlert(response.message);
      }
      // console.log(response);
    });

    //this.router.navigateByUrl('/registration-thankyou');
  }


  // uploadPhoto(fileChangeEvent) {
  //   // Get a reference to the file that has just been added to the input
  //   const photo = fileChangeEvent.target.files[0];
  //   // Create a form data object using the FormData API
  //   let formData = new FormData();
  //   // Add the file that was just added to the form data
  //   formData.append("photo", photo, photo.name);
  //   // POST formData to server using HttpClient
  // }

  checkLocationInputs() {
    if (this.stateValue === null || this.districtValue === null || this.talukaValue === null) {
      return true;
    }
    else if (this.districtValue.length === 0 || this.talukaValue.length === 0) { return true; }
    else { return false; }
  }
  makeBlobFromURI(uri, fieldName) {
    let fileName;
    // resolve path, get buffer, create blob
    this.filePath
      .resolveNativePath(uri)
      .then(async (resolvedPath) => {
        console.log('path', resolvedPath);
        const pathSplit = resolvedPath.split('/');
        fileName = pathSplit[pathSplit.length - 1];
        const dirPath = 'file:///storage/emulated/0/' + pathSplit.splice(pathSplit.length - 2, 1) + '/';
        console.log('fileName', fileName);
        console.log('dirPath', dirPath);
        this.updatedocumentLink(fieldName, fileName);
        const readDocument = async () => {
          const contents = await Filesystem.readFile({
            path: resolvedPath,
            encoding: Encoding.UTF8,
          });
          console.log('File read results', contents);
          const imgblob = new Blob([contents.data]); //create blob
          console.log(imgblob);
          // upload blob
          this.registrationService.uploadImage(imgblob, fieldName, this.userId, this.accessToken)
            .subscribe(data => {
              console.log('uploaded',data);
            }, error => console.log('upload error', error));
        };
        readDocument().catch(error => console.log('File read error', error));
      }).catch(error => console.log('path resolve error', error));
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message,
        buttons: [{
          text: 'Okey',
          handler: () => {
            this.router.navigate(['registration-thankyou']);
          }
        }
        ]
      })
      .then(alertEl => alertEl.present());
  }
}
