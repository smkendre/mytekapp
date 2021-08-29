import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
// import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  displayUserName: any;

  constructor(private authService : AuthService, private router : Router
    ) {}

  onLogout(){
    // this.authService.logout;
    this.authService.logout();

  }

  ngOnInit() {


  }

  goToHome(){
    this.router.navigateByUrl('/home');

  }

  // CallPhoneNumber(){
  //   this.callNumber.callNumber("8828133339", true)
  //   .then(res => console.log('Launched dialer!', res))
  //   .catch(err => console.log('Error launching dialer', err));

  // }
}
