/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
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

  constructor(private httpService: HttpService, private http: HttpClient, private fileChooser: FileChooser, private file: File) { }


  uploadImage(blobData, fieldName, user_id, token) {

    const formData = new FormData();
    formData.append('files', blobData);

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: 'Bearer ' + token
      })
    };
    const postData = { image: blobData, user_id, field_name: fieldName };
    const url = environment.apiUrl + 'upload-image';
    return this.http.post(url, postData, httpHeader);
  }
  uploadImageFile(file, token, fieldName, user_id) {

    const postData = { image: file, user_id: user_id, field_name: fieldName };
    const httpHeader = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        Authorization: 'Bearer ' + token
      })
    };

    const url = environment.apiUrl + 'upload-image';

    return this.http.post(url, postData, httpHeader);
  }
  get_categories(token: string): Observable<any> {

    // const httpHeader = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer '+token })
    // };

    // const url = environment.apiUrl + 'categories';


    return this.httpService.get('categories', token);
  }

  get_states(token: string): Observable<any> {
    return this.httpService.get('states', token);
  }
  selectFile() {
    const options = { mime: 'application/pdf' };
    return this.fileChooser.open(options);
  }


  get_districts(state_id: string, token: string): Observable<any> {


    return this.httpService.find('get_districts', { state_id }, token);
  }


  get_talukas(district_id: string, token: string): Observable<any> {
    return this.httpService.find('get_talukas', { district_id }, token);
  }

  register(postData: any, token: string): Observable<any> {
    return this.httpService.find('registration', postData, token);
  }
  makeFileIntoBlob(_imagePath, fileName) {
    return new Promise((resolve, reject) => {
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          const { name, nativeURL } = fileEntry;

          // get the path..
          const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));
          console.log('path', path);
          console.log('fileName', name);

          fileName = name;

          // we are provided with name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);


        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          const imgBlob = new Blob([buffer], {
            type: 'image/jpeg'
          });

          // this.uploadImage(imgBlob, fileName, userId, token).subscribe(res => {
          //   console.log('uploaded',res);
          // }, error => console.log('upload error',error));
          console.log(imgBlob.type, imgBlob.size);

          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }
}
