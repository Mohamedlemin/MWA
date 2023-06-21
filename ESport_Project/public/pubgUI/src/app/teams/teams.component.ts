import { Component } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute } from '@angular/router';
import { pmpl } from '../models/pmpl.modle';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  constructor(private pmplService : PmplDataService
    ,private activeRoute : ActivatedRoute
    ,private authService:AuthService){}
  ngOnInit(): void {
    this.getOne()
  }

  offset =0;
  count=5;
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
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  get isLoggedIn(): boolean {    
    return this.authService.islogging;
  }
}
