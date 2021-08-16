import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { of, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import {Tenders } from './tenders.model';

@Injectable({
  providedIn: 'root'
})
export class TendersService {


  constructor(private http: HttpClient) { }


  fetchTenders(token: string):Observable<any>{

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token })
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
        'Authorization': 'Bearer '+token })
    };


    const url = environment.apiUrl + 'my-tenders';
    const postData = {user_id: user_id};

    return this.http.post(url, postData, httpHeader);

 }


 getTenderMilestones(tender_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + 'milestones';
  const postData = {tender_id: tender_id};

  return this.http.post(url, postData, httpHeader);

}

submitRequest(tender_id: string, user_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + 'tender-request';
  const postData = {tender_id: tender_id, user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}



submitReportData(formData: any, user_id: string, tender_id: string, token: string):Observable<any>{


  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',

      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + 'submit-report';
  const postData = {formData: formData, tender_id: tender_id, user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}

getReportFields(tender_id: string, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + 'report-fields';
  const postData = {tender_id: tender_id};

  return this.http.post(url, postData, httpHeader);

}


getMyreports(user_id: string, token: string):Observable<any>{

  const httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token })
  };


  const url = environment.apiUrl + 'my-reports';
  const postData = {user_id: user_id};

  return this.http.post(url, postData, httpHeader);

}



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
