import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { of, Observable } from 'rxjs';



export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TendersService {


  constructor(private http: HttpClient) { }


  fetchTenders(token: string):Observable<any>{

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
})
    };


    const url = environment.apiUrl + 'tenders';

    return this.http.get(url, httpHeader);

    //  return this.http.get<Tenders[]>('http://localhost:3000/tenders').pipe(
    //    tap(tenders => console.log('Users retrieved!')),
    //  catchError(this.handleError<Tenders[]>('Get user', []))
    //  );
  }


  getMyTenders(user_id: string, token: string):Observable<any>{


    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain' })
    };


    const url = environment.apiUrl + 'my-tenders';
    const postData = {user_id: user_id};

    return this.http.post(url, postData, httpHeader);

 }


 getTenderMilestones(tender_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'milestones';
  const postData = {tender_id: tender_id};

  return this.http.post(url, postData, httpHeader);

}



tenderDetails(tender_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'tender-details';
  const postData = {id: tender_id};

  return this.http.post(url, postData, httpHeader);

}

submitRequest(tender_id: string, user_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'tender-request';
  const postData = {tender_id: tender_id, user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}



submitReportData(formData: any, user_id: string, tender_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'submit-report';
  const postData = {formData: formData, tender_id: tender_id, user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}



submitMaterialRequest(formData: any, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'material-request';

  return this.http.post(url, formData, httpHeader);

}
getReportFields(tender_id: string, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'report-fields';
  const postData = {tender_id: tender_id};

  return this.http.post(url, postData, httpHeader);

}


getMyreports(user_id: string, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'my-reports';
  const postData = {user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}

getMaterialRequests(user_id: string, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'get-material-requests';
  const postData = {user_id: user_id};

  return this.http.post(url, postData, httpHeader);
}

getMaterialList(tender_id: number, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain' })
  };


  const url = environment.apiUrl + 'materials';
  const postData = {tender_id: tender_id};

  return this.http.post(url, postData, httpHeader);

}




uploadImage(blobData, name, ext, fileName, user_id, token) {
  const formData = new FormData();
  formData.append('file', blobData, `myimage.${ext}`);
  formData.append('name', name);
  formData.append('fileName', fileName);
  formData.append('user_id', user_id);


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/formdata',

      'Authorization': 'Bearer '+token,

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Accept': 'application/json, text/plain'
     })
  };

  const url = environment.apiUrl + 'report-image';

  return this.http.post(url, formData, httpHeader);

  // return this.httpService.find('upload-image', formData, token);
}

uploadImageFile(file: File, token) {
  const ext = file.name.split('.').pop();
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', file.name);




  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',

      'Authorization': 'Bearer '+token,

      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*' })
  };

  const url = environment.apiUrl + 'report-image';

  return this.http.post(url, formData, httpHeader);
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
