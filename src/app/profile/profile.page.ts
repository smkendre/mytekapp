import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraOptions, CameraResultType, CameraSource } from '@capacitor/camera';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { environment } from 'src/environments/environment';
import { type } from 'os';
import { Filesystem, FilesystemDirectory } from '@capacitor/filesystem';
import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  accessToken: string;
  userId: string;
  user : any;
  isLoading = false;
  area_of_interest: string;
  work_location: any;
  downloadProgress = 0;
  profileImg: string;

  livePath: string = environment.liveUrl;
  photo: SafeResourceUrl;

  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private platform: Platform,
    private registrationService: RegistrationService,
    private actionSheetController: ActionSheetController
  ) {



   }

  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){
        this.accessToken = res.token;
        this.userId = res.id;


    this.authService.user_details({user_id: this.userId}, this.accessToken).subscribe(response => {


      if(response.status == 'success'){
        this.isLoading = false;

        this.user = response.data;
      }

       this.area_of_interest = JSON.parse(this.user.area_of_interest).join(', ');
       this.work_location = JSON.parse(this.user.preferred_location);
        this.profileImg = this.user.profile_img;



       // console.log(this.user.reg_certificate);

    });
      }else{
        this.router.navigate(['auth']);
      }

    });
  }


  ionViewWillEnter(){


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



    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();


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

      this.profileImg = imgUrl;
      this.registrationService.uploadImage(imgUrl, fileName, this.userId, this.accessToken).subscribe((newImage) => {

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

      this.profileImg = dataUrl;

      this.registrationService.uploadImageFile(dataUrl, this.accessToken, fieldName, this.userId).subscribe((newImage) => {
      });
    };

    // fr.readAsDataURL(file);

  }

  getMimeType(name){
    if(name.indexOf('pdf') >= 0){
      return 'application/pdf';
    }

   else if(name.indexOf('png') >= 0){
      return 'image/png';
    }

   else if(name.indexOf('jpg') >= 0){
      return 'image/jpg';
    }
  }

  getImageUrl(url: string){
    if(url.indexOf('documents') >=  0 ){
      return this.livePath+url;;
    } else {
      return 'data:image/jpg;base64,'+ url;
    }
  }

  previewFile(url: string){

    const previewUrl = environment.liveUrl + url;

    this.http.get(previewUrl, {
      responseType: 'blob',
      reportProgress: true,
      observe: 'events'
    }).subscribe(async event => {

      console.log(event);
      if(event.type === HttpEventType.DownloadProgress){
        this.downloadProgress = Math.round((100 * event.loaded) / event.total);
      }else if(event.type === HttpEventType.Response){
        this.downloadProgress = 0;
      }

     // this.fileOpener.open();

    //  const name = url.substr(url.lastIndexOf('/')+1);
    //  const base64 = await this.convertBlobToBase64(event.body) as string;


    // const foo = await Filesystem.writeFile({
    //   path: name,
    //   data: base64,
    //   directory: FilesystemDirectory.Documents
    // });
    // console.log('saved: '+foo);

    // });


  });

  // private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
  //   const reader = new FileReader;
  //   reader.onerror = reject;
  //   reader.onload = () => {
  //     resolve(reader.result);
  //   };
  //   reader.readAsDataURL(blob);
  // });

}
}
