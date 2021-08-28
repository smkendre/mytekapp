import { AuthConstants } from '../config/auth-constant';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';


export interface AuthResponseData {
  id: string;
  name: string;
  email: string;
  refreshToken: string;
  status: string;
  message?: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userId = null;

  userData: any;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userid() {
    return this._userId;
  }


  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  getUserData(){

    this.userData= this.storageService.get(AuthConstants.AUTH);

    return this.userData;
    // this.storageService.get(AuthConstants.AUTH).then(res => {
    //   this.userData$.next(res);
    // });
  }

  login(postData: any): Observable<any>{

    return this.httpService.post('login', postData);


  }

  signup(postData: any): Observable<any>{
    return this.httpService.post('signup', postData);

  }

  contactUs(postData: any, token: string): Observable<any>{
    return this.httpService.find('contact-us', postData, token);

  }




registration(formData: any, token: string):Observable<any>{


  return this.httpService.find('registration', formData, token);

}



user_details(formData: any, token: string):Observable<any>{


  return this.httpService.find('user', formData, token);

}


  logout(){
    this.storageService.removeStorageItem(AuthConstants.AUTH).then(res => {
      this.router.navigateByUrl('/auth');
      // this.userData$.next('');
    });
    // this.storageService.clear();
  }


}
