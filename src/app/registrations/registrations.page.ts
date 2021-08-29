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
  stateValue ='';
  districtValue = '';
  talukaValue = '';
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
    private filePath: FilePath

  ) { }


  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };


  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);

      if (res) {

        this.accessToken = res.token;
        this.username = res.name;
        this.userId = res.id;
      } else {
        this.router.navigate(['auth']);
      }
    });
    this.compareWith = this.compareWithFn;


  }
  addPreferedLocation(){
    console.log(this.states.find(x => x.id === this.stateValue));
    const location = {
      state: this.states.find(x => x.id === this.stateValue).name,
      district: this.districts.find(x => x.id === this.districtValue).name,
      taluka: this.talukas.find(x => x.id === this.talukaValue).name,
    } ;
    this.workLocations.push(location);
    this.stateValue = this.districtValue = this.talukaValue = null ;
  }
  removeLocation(index){
    console.log(index);
    this.workLocations.splice(index,1);
  }
  ionViewWillEnter() {
    this.isLoading = true;



    this.registrationService.get_states(this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.isLoading = false;
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
      }


      this.isLoading = false;
      //  console.log(this.stateValue);

    });



    this.registrationService.get_categories(this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.isLoading = false;
        this.areaOfInterst = response.data;
        console.log(this.areaOfInterst);


        //   this.storageService.store('categories', response.data);

      }
    });


  }


  // ionViewDidEnter(){
  //   if(this.stateValue){
  //     this.onStateChange(this.stateValue);
  //   }


  //   if(this.districtValue){
  //     this.onDistrictChange(this.districtValue);
  //   }
  // }

  onStateChange(event: any) {
    const stateID = event.target.value;
    console.log('stateID', stateID);
    this.registrationService.get_districts(stateID, this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.districts = response.data;
        console.log(this.districts);
      }
    }, error => console.log(error));
  }

  onDistrictChange(event: any) {
    const districtId = event.target.value;
    console.log('districtId', districtId);
    this.registrationService.get_talukas(districtId, this.accessToken).subscribe((response) => {
      if (response.status === 'success') {
        this.talukas = response.data;
        console.log(this.talukas);
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
          this.registrationService.selectFile().then(uri => {
            this.filePath.resolveNativePath(uri)
              .then(async (filePath) => {
                this.updatedocumentLink(fileName, filePath);
                this.registrationService.makeFileIntoBlob(filePath,fileName).then((blob) => {
                  const blobFile = blob;
                  this.registrationService.uploadImage(blobFile, fileName, this.userId, this.accessToken).subscribe(res => {
                    console.log('uploaded',res);
                  }, error => console.log('upload error',error));
                });
              })
              .catch(err => console.log(err));
          });
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
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });

    try {

      // console.log(image);
      //  let imgStr = image.base64String.replace('data:image/jpeg;base64', '');
      //  imgStr = image.base64String.replace('data:image/png;base64', '')
      // const blobData = this.base64toBlob(image.base64String, `image/${image.format}`);
      // const imageName = 'Give me a name';
      //  const guestPicture = image.base64String;

      // console.log(blobData);

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
    // const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    //const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = (event.target as HTMLInputElement).files[0];


    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();


      if (fieldName == 'gst_certificate') {
        this.imageUrl = dataUrl;
      }



      if (fieldName == 'reg_certificate') {
        this.RegimageUrl = dataUrl;
      }



      if (fieldName == 'pan_card') {
        this.PanimageUrl = dataUrl;
      }


      if (fieldName == 'adhaar_file') {
        this.AdhaarimageUrl = dataUrl;
      }

      this.registrationService.uploadImageFile(this.imageUrl, this.accessToken, fieldName, this.userId).subscribe((newImage: ApiImage) => {
        this.images.push(newImage);
      });
    };

    fr.readAsDataURL(file);


    //  console.log(this.imageUrl);

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
    let postData = {
      'name': form.value.uname,
      'company': form.value.company,
      'area_of_interest': this.interested,
      'address': form.value.address,
      'state': form.value.state,
      'district': form.value.district,
      'taluka': form.value.taluka,
      'gst_num': form.value.gst_num,
      'reg_num': form.value.reg_num,
      'pan_num': form.value.pan_num,
      'adhaar_num': form.value.adhaar_num,
      'user_id': this.userId,

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

  checkLocationInputs(){
    if(this.stateValue === null || this.districtValue === null || this.talukaValue === null){return true; }
    else{ return false; }
  }


  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message: message,
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


  // async showPreview(iamge: string){
  //   const modal = await this.modalController.create({
  //     component: ImageModalPage,
  //     cssClass: 'transparent-modal',
  //     componentProps: {
  //       img
  //     }
  //   });
  //   modal.present();

  // }

}
