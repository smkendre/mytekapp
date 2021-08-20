import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(serviceName: string, data: any){

    // console.log(JSON.stringify(data));
    const headers = new HttpHeaders();
    const options = {headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data, options);
  }


  find(serviceName: string, data: any, token: string){

    // console.log(JSON.stringify(data));
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token })
    };

    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data, httpHeader);
  }


  get(serviceName: string, token: string){

    // console.log(JSON.stringify(data));

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + serviceName;


    return this.http.get(url, httpHeader);
  }
}
