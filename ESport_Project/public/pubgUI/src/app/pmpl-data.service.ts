import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PmplDataService {

  private _baseUrl : string ="http://localhost:3000/api/pmpls"

  constructor(private _http : HttpClient,private authService : AuthService) { }
  public delete():Observable<any>{
    return this._http.delete("")
  }
}

// two type of midelware
// final response
// intercepteur
