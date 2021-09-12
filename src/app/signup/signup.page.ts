import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { CustomValidators } from './custom-Validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;
  submitted = false;
  error_messages = {
    'uname': [
      { type: 'required', message: 'Please enter your name.' },
    ],


    'email': [
      { type: 'required', message: 'Please enter email address.' },
      { type: 'email', message: 'please enter a valid email address.' }
    ],

    'pwd': [
      // { type: 'required', message: 'Please enter your password.' },
      // { type: 'minlength', message: 'Password must be minimum 8 characters long.'},
      {type: 'pattern', message: 'Password should contain atleast 8 characters, one upper case, one lower case, one number and one special character.'}
    ],
    'cpwd': [
      { type: 'required', message: 'Please enter confirm password.' },
      { type: 'minlength', message: 'Password must be minimum 8 characters long.' },
    ],
  }


  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit():void {
    this.form = this.formBuilder.group({
      uname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      pwd: ['', Validators.compose([
        // Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),

      ])],
      cpwd: ['', Validators.compose([
        Validators.required, Validators.minLength(8)
      ])]
    }, {
      // Validator: this.Validate_cpwd.bind(this)
      validator: CustomValidators.passwordMatchValidator

    });
  }

  // get f() { return this.form.controls; }


  // Validate_cpwd(formGroup: FormGroup)
  // {
  //   const { value: password } = formGroup.get('pwd');
  //   const { value: confirmPassword } = formGroup.get('cpwd');
  //   return password === confirmPassword ? null : formGroup.get('cpwd').setErrors({ NoPassswordMatch: true });
  //   ;
  // }

  onSubmit() {


    // stop here if form is invalid
    if (this.form.invalid) {
        console.log('error');
    }else{
      console.log('success');
    }


    this.loadingCtrl
    .create({ keyboardClose: true, message: 'Logging in...' })
    .then(loadingEl => {
    if (!this.form.valid) {
      return;
    }
    const email = this.form.value.email;
    const password = this.form.value.pwd;
    const name = this.form.value.uname;

     console.log(this.form.value);

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
