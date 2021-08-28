import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  accessToken: string;
  userId: string;
  slForm: NgForm;

  constructor(
    private router: Router,
     private authService: AuthService,
     private storageService: StorageService,
     private alertCtrl: AlertController) { }

  ngOnInit() {

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){

        this.accessToken = res.token;
        this.userId = res.id;
      }else{
        this.router.navigate(['auth']);
      }
    });

  }

  onSubmit(form: NgForm){

    const subject = form.value.subject;
    const message = form.value.message;

    this.authService.contactUs({'subject': subject, 'message': message, 'user_id': this.userId}, this.accessToken).subscribe((res: any) => {
      form.reset()

      this.showAlert(res.message);

    },
    (error: any) =>{
      this.showAlert("Network Error");

    });
  }


  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Alert Message',
        message: message,
        buttons: [{
          text: 'Okey',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
  ]
      })
      .then(alertEl => alertEl.present());
  }

}
