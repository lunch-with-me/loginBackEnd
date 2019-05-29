import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MyserviceService {

  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:3003/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post('http://localhost:3003/users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get('http://localhost:3003/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

  getEmail() {
    return this._http.get('http://localhost:3003/users/email', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }
  submitRegi(body:any){
    return this._http.post('http://127.0.0.1:3003/usersRegi/registerdetails', body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

}
