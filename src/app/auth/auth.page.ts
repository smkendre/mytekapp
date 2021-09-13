import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../config/auth-constant';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLogin = true;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storageService: StorageService) { }


  ngOnInit() {
    this.isLoading = true;

    this.storageService.get(AuthConstants.AUTH).then(res => {

      if(res){
        this.router.navigate(['home']);
      }else{
      }
      this.isLoading = false;

    });
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
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

    this.authService.login({'email': email, 'password': password}).subscribe((res: any) => {

      loadingEl.dismiss();

      if(res.status == 'success'){

        if(res.data.role == 1 || res.data.role == 2){
          this.showAlert('You are not authorize to access this app');
        }else{
          this.storageService.store(AuthConstants.AUTH, res.data);
          this.router.navigateByUrl('/home');
        }

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
