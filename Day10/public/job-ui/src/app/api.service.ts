import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './jobs/job.model';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
   BASE_URL: string = 'http://localhost:3000/api/jobs/';
  
  constructor(private _http: HttpClient) {}


  getAll(): Observable<Job[]> {
    return this._http.get<Job[]>(this.BASE_URL);
  }


  getOne(id:String):Observable<Job> {
    return this._http.get<Job>(this.BASE_URL+id);
  }

  deleteOne(id:String):Observable<Job> {
    return this._http.delete<Job>(this.BASE_URL+id);
  }

  create(job:Job): Observable<Job> {
    return this._http.post<Job>(this.BASE_URL,job)
  }
}
