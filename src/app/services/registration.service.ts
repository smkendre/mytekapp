import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpService: HttpService) { }

  get_categories(token: string):Observable<any>{

    // const httpHeader = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer '+token })
    // };

    // const url = environment.apiUrl + 'categories';


      return this.httpService.get('categories', token);
  }

  get_states(token: string):Observable<any>{
    return this.httpService.get('states', token);
}


get_districts(state_id: number, token: string):Observable<any>{


  return this.httpService.find('get_districts', {state_id: state_id}, token);
}


get_talukas(district_id: number, token: string):Observable<any>{
  return this.httpService.find('get_talukas', {district_id: district_id}, token);
}

register(postData: any, token: string):Observable<any>{
  return this.httpService.find('registration', postData, token);
}
}
