import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from './models/pmpl.modle';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  private apiUrl = environment.BASE_URL+'/pmpls';
  constructor(private http: HttpClient) {}

  create(teamForm: Team,pmplId: string,): Observable<any> {
    console.log(pmplId);
    
    return this.http.post<any>(this.apiUrl+'/'+pmplId+'/teams', teamForm);
  }
  
  deleteOne(pmplId: String,teamId:string): Observable<Team> {
    return this.http.delete<Team>(this.apiUrl+'/'+ pmplId+'/teams/'+teamId);
  }
}
