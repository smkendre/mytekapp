import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { RegistrationService, ApiImage } from '../services/registration.service';
import { StorageService } from '../services/storage.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth.service';

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
  states: any;
  districts: [];
  talukas: [];
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
  stateValue: string;
  districtValue: string;
  talukaValue: string;
  gst_num: string;
  reg_num: string;
  pan_num: string;
  adhaar_num: string;
  compareWith: any;
  // toggle.contact = false;
  interested = [];
  iLikeIt={isChecked:false};
  user: any;
  images: ApiImage[] = [];
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(private router: Router, private registrationService: RegistrationService, private storageService: StorageService,
    private alertCtrl: AlertController,
    private actionSheetController: ActionSheetController,
    private platform: Platform,
    private authService: AuthService,

    ) { }


    compareWithFn = (o1, o2) => {
      return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };


  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(res => {
      console.log(res);

      if(res){

        this.accessToken = res.token;
        this.username = res.name;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });
    this.compareWith = this.compareWithFn;


  }

  ionViewWillEnter(){
    this.isLoading = true;



    this.registrationService.get_states(this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.isLoading = false;
        this.states = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });

    this.authService.user_details({user_id: this.userId}, this.accessToken).subscribe(response => {


      if(response.status == 'success'){


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
      if(response.status == 'success'){
        this.isLoading = false;
        this.areaOfInterst = response.data;


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

  onStateChange(stateId: any){

   // console.log(stateId);
    this.registrationService.get_districts(stateId, this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.districts = response.data;
     //   this.storageService.store('categories', response.data);

      }
    });
  }


  onDistrictChange(districtid: any){

    this.registrationService.get_talukas(districtid, this.accessToken).subscribe((response) => {
      if(response.status == 'success'){
        this.talukas = response.data;

     //   this.storageService.store('categories', response.data);

      }
    });
  }

  toggleOtherField(){
    this.toggleDisplay = !this.toggleDisplay;

  }

  onSelect(selectedVal: string){
    this.interested.push(selectedVal);


  }

 async selectImageSource(fileName: string){
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'Camera',
        handler: () => {
          this.addImage(CameraSource.Camera, fileName)
        }
      },
      {
      text: "Choose from Gallery",
      icon: 'Image',
      handler: () => {
        this.addImage(CameraSource.Photos, fileName)
      }
    }
    ];

    if (!this.platform.is('hybrid')) {
      buttons.push({
        text: 'Choose a File',
        icon: 'attach',
        handler: () => {
          this.fileInput.nativeElement.click();
        }
      });
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();


  }



  async addImage(source: CameraSource, fileName: string) {
     let image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });

try{

  // console.log(image);
//  let imgStr = image.base64String.replace('data:image/jpeg;base64', '');
//  imgStr = image.base64String.replace('data:image/png;base64', '')
  // const blobData = this.base64toBlob(image.base64String, `image/${image.format}`);
  // const imageName = 'Give me a name';
//  const guestPicture = image.base64String;

// console.log(blobData);

if(fileName == 'gst_certificate'){
  this.imageUrl = 'data:image/jpeg;base64,' + image.base64String;
}



if(fileName == 'reg_certificate'){
  this.RegimageUrl = 'data:image/jpeg;base64,' + image.base64String;
}



if(fileName == 'pan_card'){
  this.PanimageUrl = 'data:image/jpeg;base64,' + image.base64String;
}


if(fileName == 'adhaar_file'){
  this.AdhaarimageUrl = 'data:image/jpeg;base64,' + image.base64String;
}
  this.registrationService.uploadImage(image.base64String, fileName, this.userId, this.accessToken).subscribe((newImage: ApiImage) => {
    this.images.push(newImage);
  });
}
catch(error){

}


  }

  // Used for browser direct file upload
  uploadFile(event: Event, fieldName) {
   // const eventObj: MSInputMethodContext = event as MSInputMethodContext;
    //const target: HTMLInputElement = eventObj.target as HTMLInputElement;
    const file: File = (event.target as HTMLInputElement).files[0];


    const fr = new FileReader();
    fr.onload = () =>{
      const dataUrl = fr.result.toString();


      if(fieldName == 'gst_certificate'){
        this.imageUrl = dataUrl;
      }



      if(fieldName == 'reg_certificate'){
        this.RegimageUrl = dataUrl;
      }



      if(fieldName == 'pan_card'){
        this.PanimageUrl = dataUrl;
      }


      if(fieldName == 'adhaar_file'){
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


  onSubmit(form: NgForm){

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

      if(response.status == 'success'){
        this.router.navigateByUrl('/registration-thankyou');
      }else{
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
