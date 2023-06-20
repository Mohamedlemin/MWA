import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from './models/user.modle';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private baseUrl = environment.BASE_URL+"/users" ;

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string,name:string): Observable<any> {
    const signInData = {
      username: username,
      password: password,
      name:name
    };
    console.log("sign up called");
    
    return this.http.post(`${this.baseUrl}`, signInData);
  }

  // singup(user: User): Observable<User> {
  //   return this.http.post<User>(this.baseUrl, user);
  // }

  
  login(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/login", user);
  }
}
