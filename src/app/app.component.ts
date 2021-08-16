import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from './config/auth-constant';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  displayUserName: any;

  constructor(private authService : AuthService, private router : Router, private storageService: StorageService) {}

  onLogout(){
    // this.authService.logout;
    this.authService.logout();

  }

  ngOnInit() {

    this.storageService.get(AuthConstants.AUTH).then(res => {
      if(res){
        this.displayUserName = res.name;
      }
    });
  }

  goToHome(){
    this.router.navigateByUrl('/home');

  }
}
