import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  get(serviceName: string, token: string){

    // console.log(JSON.stringify(data));
    const headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append('Authorization', 'Bearer '+token );

    const options = {headers: headers, withCredentials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.get(url, options);
  }
}
