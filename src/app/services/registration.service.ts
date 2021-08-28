import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpService: HttpService, private http: HttpClient) { }


  uploadImage(blobData, fieldName, user_id, token) {

    const formData = new FormData();
    formData.append('files', blobData);

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': 'Bearer '+token })
     };

     const postData = {'image': blobData, 'user_id': user_id, 'field_name': fieldName};

    // const httpHeader = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'enctype': 'multipart/form-data',
    // })
    // };

    const url = environment.apiUrl + 'upload-image';

    return this.http.post(url, postData, httpHeader);
    // return this.http.post(url, formData, httpHeader);

    // return this.httpService.find('upload-image', formData, token);
  }

  uploadImageFile(file, token, fieldName, user_id) {
    // const ext = file.name.split('.').pop();
   // const formData = new FormData();
   // formData.append('file', file);
    // formData.append('name', file.name);

    // formData.append('fileName', fileName);

    // formData.append('user_id', user_id);

const postData = {'image': file, 'user_id': user_id, 'field_name': fieldName};
    const httpHeader = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+token })
    };

    const url = environment.apiUrl + 'upload-image';

    return this.http.post(url, postData, httpHeader);
  }


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


get_districts(state_id: string, token: string):Observable<any>{


  return this.httpService.find('get_districts', {state_id: state_id}, token);
}


get_talukas(district_id: string, token: string):Observable<any>{
  return this.httpService.find('get_talukas', {district_id: district_id}, token);
}

register(postData: any, token: string):Observable<any>{
  return this.httpService.find('registration', postData, token);
}
}
