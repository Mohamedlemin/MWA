import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { User } from './models/user.modle';
import { UserDataService } from './user-data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _jwt : JwtHelperService,
    private _userService:UserDataService) { }

  
  public get islogging() : boolean {
    if (null === localStorage.getItem("token")) {
      return false
    }else{
      return true
    }
  }
  
  public get name() : string {
    const token =this.token
     return this._jwt.decodeToken(token).name as string
    
  }
  
  public get token() : string {
    return localStorage.getItem("token") as string
  }
  public set token(token:string)  {
   localStorage.setItem("token",token)
  }
  
  
  signup(username: string, password: string,name:string){
  return  this._userService.signUp(username,password,name);

  }

  login(user:User){
   return this._userService.login(user);

  }
  
  logout(){
    localStorage.clear()

  }
}
