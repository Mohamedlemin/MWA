import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamForm } from './models/form-modle';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  private apiUrl = 'api/teams'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  create(teamForm: TeamForm): Observable<any> {
    return this.http.post<any>(this.apiUrl, teamForm);
  }
}
