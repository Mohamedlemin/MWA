import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // second way
  @ViewChild("loginForm")
  loginForm !:NgForm
   
  username !: string;
  password !: string;
  
  login(){
    console.log("login called");
    console.log(this.loginForm.form.value); 
  }
// first way
  // login(form:NgForm){
  //   console.log("login called");
  //   console.log(form.form.value);
    
    
  // }
}
