import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {

    this.loadingCtrl
    .create({ keyboardClose: true, message: 'Logging in...' })
    .then(loadingEl => {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.pwd;
    const name = form.value.uname;

    console.log(name);

    this.authService.signup({'name': name, 'email': email, 'password': password}).subscribe((res: any) => {
      loadingEl.dismiss();

      if(res.status == 'success'){

        this.storageService.store(AuthConstants.AUTH, res.data);
        this.router.navigateByUrl('/home');
      }else{
        this.showAlert(res.message);
      }
    },
    (error: any) =>{
      this.showAlert("Network Error");

    }

    )
  });
  }

  private showAlert(message: string) {
    this.alertCtrl
      .create({
        header: 'Authentication failed',
        message: message,
        buttons: ['Okay']
      })
      .then(alertEl => alertEl.present());
  }

}
