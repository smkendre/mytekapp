import { Injectable } from '@angular/core';
import {  CanLoad, UrlTree, Route, UrlSegment, Router, CanActivate } from '@angular/router';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constant';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router){}


  canActivate(): Promise<boolean>{
    return new Promise(resolve => {
      this.storageService.get(AuthConstants.AUTH).then(res => {
        if(res){
          resolve(true);
          this.router.navigate(['home']);

        }else{
          this.router.navigate(['auth']);
          resolve(false);

        }
      }).catch(err => {
        resolve(false);
      })
    });
  }
}
