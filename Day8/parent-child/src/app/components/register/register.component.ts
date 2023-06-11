import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm !: FormGroup;

  constructor(private _userService :UsersDataService ){
    this.registrationForm = new FormGroup(
      {
        name : new FormControl(),
        username : new FormControl(),
        password : new FormControl()
      }
    )
  }

  // register(){
  //   console.log("register clicked");
  //   console.log(this.registrationForm.value);
    
    
  // }

  register() {
    
    console.log(this.registrationForm.value);

    this._userService.create(this.registrationForm.value).subscribe({
      next:(res)=>{
      console.log(res);
  

    },
    error:(err)=> {
      console.log(err);
    
    }}
    );
  }
  }


