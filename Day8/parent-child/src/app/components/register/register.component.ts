import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm !: FormGroup;

  constructor(){
    this.registrationForm = new FormGroup(
      {
        name : new FormControl(),
        username : new FormControl(),
        password : new FormControl()
      }
    )
  }

  register(){
    console.log("register clicked");
    console.log(this.registrationForm.value);
    
    
  }

}
