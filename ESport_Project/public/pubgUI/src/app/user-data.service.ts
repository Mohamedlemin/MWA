import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from './models/user.modle';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = environment.BASE_URL+"/"+environment.users ;

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string,name:string): Observable<any> {
    const signInData = {
      username: username,
      password: password,
      name:name
    };
    
    
    return this.http.post(`${this.baseUrl}`, signInData);
  }

  login(user: User): Observable<any> {
    console.log(this.baseUrl+"/"+environment.login);
    
    return this.http.post<any>(this.baseUrl+"/"+environment.login, user);
  }
}
