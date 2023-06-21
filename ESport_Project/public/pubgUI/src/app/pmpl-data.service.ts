import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Team, pmpl } from './models/pmpl.modle';

@Injectable({
  providedIn: 'root'
})
export class PmplDataService {


  private BASE_URL: string = "http://localhost:3200/api/pmpls/"

  constructor(private _http: HttpClient, private authService: AuthService) { }



  getAll(offset: number, count: number): Observable<pmpl[]> {
    return this._http.get<pmpl[]>(this.BASE_URL + "?offset=" + offset + "&count=" + count);
  }


  getOne(id: String): Observable<pmpl> {
    return this._http.get<pmpl>(this.BASE_URL + id);
  }

  deleteOne(id: String): Observable<pmpl> {
    return this._http.delete<pmpl>(this.BASE_URL + id);
  }

  create(pmpl: pmpl): Observable<pmpl> {
    return this._http.post<pmpl>(this.BASE_URL, pmpl)
  }

  getTeam(pmplId: string, teamID: string): Observable<Team> {
    return this._http.get<Team>(this.BASE_URL + pmplId + "/teams/" + teamID)
  }

}

// two type of midelware
// final response
// intercepteur
