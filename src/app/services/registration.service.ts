/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
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
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(private httpService: HttpService,
    private http: HttpClient, private fileChooser: FileChooser,
    private file: File, private filePath: FilePath,
    private transfer: FileTransfer)
    {
     }


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

    const postData = { image: file, user_id, field_name: fieldName };
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
  uploadFile(path,name,token,user_id) {
    const options: FileUploadOptions = {
       fileKey: 'file',
       fileName: name,
       headers: {Authorization: 'Bearer ' + token},
       httpMethod: 'POST',
       mimeType:'file/pdf',
       params: {user_id}
    };
    const endpoint = environment.apiUrl + 'upload-image';
    this.fileTransfer.upload(path, endpoint, options)
     .then((data) => {
       console.log('upload success',data);
     }, (err) => {
       console.log('upload error',err);
     });
  }


}
