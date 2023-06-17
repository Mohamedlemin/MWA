import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { pmpl } from './models/pmpl.modle';

@Injectable({
  providedIn: 'root'
})
export class PmplDataService {


  private BASE_URL : string ="http://localhost:3000/api/pmpls/"

  constructor(private _http : HttpClient,private authService : AuthService) { }

  public delete():Observable<any>{
    return this._http.delete("")
  }


  getAll(offset:number,count:number): Observable<pmpl[]> {    
    return this._http.get<pmpl[]>(this.BASE_URL+"?offset="+offset+"&count="+count);
  }


  getOne(id:String):Observable<pmpl> {
    return this._http.get<pmpl>(this.BASE_URL+id);
  }

  deleteOne(id:String):Observable<pmpl> {
    return this._http.delete<pmpl>(this.BASE_URL+id);
  }

  create(pmpl:pmpl): Observable<pmpl> {
    return this._http.post<pmpl>(this.BASE_URL,pmpl)
  }

  getSize():Observable<number>{
    return this._http.get<number>(this.BASE_URL+'size')
  }

}

// two type of midelware
// final response
// intercepteur