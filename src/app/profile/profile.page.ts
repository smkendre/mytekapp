import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Camera, CameraOptions, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

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

  photo: SafeResourceUrl;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private platform: Platform
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




      //  console.log(this.work_location);

    });
      }else{
        this.router.navigate(['auth']);
      }

    });
  }


  ionViewWillEnter(){


  }

 async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    console.log(image);

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  savePicture(){

  }

}
