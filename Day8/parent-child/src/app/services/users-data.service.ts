import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private base_url: string ="http:"
  constructor(private _http:HttpClient) { }

  register(user:any){
    const url = this.base_url;
     return this._http.post<any>(url,JSON.stringify(user))
  }

  create(user:any): Observable<any> {

    console.log(JSON.stringify(user))

    return this._http.post(this.base_url, JSON.stringify(user))
  
  }  

  login(user:any): Observable<any> {
    const url = this.base_url+"login";

    console.log(JSON.stringify(user))

    return this._http.post(this.base_url, JSON.stringify(user))
  
  }  
}
