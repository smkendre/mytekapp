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
      // console.log(res.name);

      if(res){
        this.router.navigate(['home']);
      }else{
      }
      this.isLoading = false;

    });
  }



  authenticate(email: string, password: string) {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEl => {
        loadingEl.dismiss();
        this.router.navigateByUrl('/home');
        // let authObs: Observable<AuthResponseData>;
        // if (this.isLogin) {
        //   authObs = this.authService.login(email, password);
        //    console.log(authObs);
        // } else {
        // //  authObs = this.authService.signup(email, password);
        // }

        // authObs.subscribe(
        //   resData => {
        //     // console.log(resData);
        //     this.isLoading = false;
        //     loadingEl.dismiss();

        //     const code = resData.error_code;
        //     if(code){
        //       this.showAlert(resData.message);

        //     }else{

        //     }

        //     this.router.navigateByUrl('/home');
        //   },
        //   errRes => {
        //     loadingEl.dismiss();
        //     // const code = errRes.error.error.message;
        //     // let message = 'Could not sign you up, please try again.';
        //     // if (code === 'EMAIL_EXISTS') {
        //     //   message = 'This email address exists already!';
        //     // } else if (code === 'EMAIL_NOT_FOUND') {
        //     //   message = 'E-Mail address could not be found.';
        //     // } else if (code === 'INVALID_PASSWORD') {
        //     //   message = 'This password is not correct.';
        //     // }
        //     // this.showAlert(message);
        //   }
        // );
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
      // console.log(res);
      loadingEl.dismiss();

      if(res.status == 'success'){

        // console.log(AuthConstants.AUTH);
        // console.log(res.data);
        this.storageService.store(AuthConstants.AUTH, res.data);
        this.router.navigateByUrl('/home');
      }else{
        this.showAlert(res.message);
      }
    },
    (error: any) =>{
      // console.log("Network Error");
      this.showAlert("Network Error");

    }

    )
  });
    // console.log(form.value);
   // this.authenticate(email, password);
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
