import { Component } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pmpl } from '../models/pmpl.modle';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  constructor(private pmplService : PmplDataService
    ,private activeRoute : ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ,private authService:AuthService){}
  ngOnInit(): void {
    this.getOne()
  }

  pmpl!:pmpl
  pmplId!:string
  getOne() {
    const id = this.activeRoute.snapshot.params['id']; 
    this.pmplId =id
    this.pmplService.getOne(id).subscribe({
      next: (pmpl) => {
        this.pmpl = pmpl;
        console.log(pmpl);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  deletePmpl(id:string){
    this.pmplService.deleteOne(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.success(environment.Deleted_Success, environment.Success);
        this.router.navigate(['/pmpl']); // Replace '/success-route' with your desired route

      },
      error:(err)=>{
        console.log(err);
        this.toastr.error(environment.Delete_Error, environment.Error);

      }
    })
  }

  get isLoggedIn(): boolean {    
    return this.authService.islogging;
  }
}
