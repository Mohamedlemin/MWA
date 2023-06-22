import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.modle';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user=  {} as User;
 constructor(private _auth:AuthService,
  private toastr: ToastrService,
  private router: Router){}


 login(){
  this._auth.login(this.user).subscribe({
    next:(data)=>{
      this._auth.token=data.token;
      console.log(this._auth.token);
      this.toastr.success(environment.login_success, environment.Success);
      this.router.navigate(['/dash']);
      // this.router.navigateByUrl('/dash');
    },
    error:(error)=>{
      console.log(error) 
      this.toastr.error(environment.login_faild, environment.Error);

     } 
  })
 }
}
