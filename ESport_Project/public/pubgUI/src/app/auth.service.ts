import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _jwt : JwtHelperService) { }

  
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
  
  
  

  login(logintokenToken:string){

    localStorage.setItem("token",logintokenToken)

  }
  logout(logintokenToken:string){

    localStorage.clear()

  }
}
