import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient
  ) { }



  uploadImage(blobData: any, user_id: string, token: string) {

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': 'Bearer '+token })
     };

     const postData = {'image': blobData, 'user_id': user_id};


    const url = environment.apiUrl + 'upload-invoice-document';

    return this.http.post(url, postData, httpHeader);

  }

  uploadImageFile(file: any, token: string, user_id: string) {

    const postData = {'image': file, 'user_id': user_id};
    const httpHeader = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+token })
    };

    const url = environment.apiUrl + 'upload-invoice-document';

    return this.http.post(url, postData, httpHeader);
  }

  submitInvoice(postData: any, token: string):Observable<any>{

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain' })
    };


    const url = environment.apiUrl + 'submit-invoice';

    return this.http.post(url, postData, httpHeader);
  }


  getInvoices(postData: any, token: string):Observable<any>{

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain' })
    };


    const url = environment.apiUrl + 'invoices';

    return this.http.post(url, postData, httpHeader);
  }
}
