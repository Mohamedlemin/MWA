import { Component, OnInit } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Team } from '../models/pmpl.modle';
import { TeamServiceService } from '../team-service.service';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';

let apiLoaded = false;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   constructor(private _pmplService : PmplDataService,
    private authService:AuthService,
    private _activatedRoute:ActivatedRoute,
    private _router: Router,
    private toastr: ToastrService,

    private _teamService: TeamServiceService){}
   team!:Team

    pmplId!: string
    teamId!: string

  ngOnInit() {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
    this.getTeam();
  }

  get isLoggedIn(): boolean {    
    return this.authService.islogging;
  }

  getTeam(){
     console.log("get team called");
     
     this.pmplId = this._activatedRoute.snapshot.params['pmplId']; 
     this.teamId = this._activatedRoute.snapshot.params['teamId']; 
    this._pmplService.getTeam(this.pmplId,this.teamId).subscribe({

      next:(team)=>{
        this.team =team
      },
      error:(err)=>{
        console.log(err);      
      }
    })
  }

  deleteTeam(){
    const pmplId = this._activatedRoute.snapshot.params['pmplId']; 
    const teamId = this._activatedRoute.snapshot.params['teamId']; 
    console.log(pmplId);
    console.log(teamId);
    
    this._teamService.deleteOne(pmplId,teamId).subscribe({
      next:(response)=>{
        console.log(response);
        this.toastr.success(environment.Deleted_Success, environment.Success);
        this._router.navigate(['/pmpl/'+this.pmplId]);
        // this._router.navigateByUrl(`/pmpl/${pmplId}`);
      },
      error:(err)=>{
        console.log(err);
        this.toastr.error(environment.Delete_Error, environment.Error);

      }
    })
  }


  

  


}
