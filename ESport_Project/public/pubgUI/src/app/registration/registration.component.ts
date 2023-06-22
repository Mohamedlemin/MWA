import { Component } from '@angular/core';

import { UserDataService } from '../user-data.service';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private authService: UserDataService,
    private toastr: ToastrService,
    private router: Router) { }

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
        // console.log('Authentication successful:', response);
        this.toastr.success(environment.register_success, environment.Success);
        this.router.navigate(['/login']);

      },
      error: (err)=>{
        console.log(err);
        this.toastr.error(environment.register_error, environment.Error);

      }
    });
    
  
  }
}
