import { Component } from '@angular/core';

import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private authService: UserDataService) { }

  name!: string;
  username!: string;
  password!: string;

  signUp() {
    // Handle the form submission here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('name:', this.name);

    this.authService.signUp(this.username, this.password,this.name)
    .subscribe({
      next:(response)=>{
        console.log('Authentication successful:', response);

      },
      error: (err)=>{
        console.error('Authentication failed:', err);

      }
    });
    
  
  }
}
