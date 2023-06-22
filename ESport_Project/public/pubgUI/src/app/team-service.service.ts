import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './models/pmpl.modle';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  private apiUrl = 'http://localhost:3200/api/pmpls';
  constructor(private http: HttpClient) {}

  create(teamForm: Team,pmplId: string,): Observable<Team> {
    console.log(pmplId);
    console.log("team:",teamForm);
    const { _id, ...teamWithoutId } = teamForm;
    console.log("team without id",teamWithoutId);
  
    return this.http.post<Team>(this.apiUrl+'/'+pmplId+'/teams', teamWithoutId);
  }
  
  deleteOne(pmplId: String,teamId:string): Observable<Team> {
    return this.http.delete<Team>(this.apiUrl+'/'+ pmplId+'/teams/'+teamId);
  }
}
