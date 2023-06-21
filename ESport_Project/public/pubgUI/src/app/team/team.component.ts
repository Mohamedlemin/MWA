import { Component, OnInit } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Team } from '../models/pmpl.modle';
import { TeamServiceService } from '../team-service.service';

let apiLoaded = false;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   constructor(private _pmplService : PmplDataService,
    private _activatedRoute:ActivatedRoute,
    private _router: Router,
    private _teamService: TeamServiceService){}
   team!:Team

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
  getTeam(){
     console.log("get team called");
     
    const pmplId = this._activatedRoute.snapshot.params['pmplId']; 
    const teamId = this._activatedRoute.snapshot.params['teamId']; 
    this._pmplService.getTeam(pmplId,teamId).subscribe({

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
        this._router.navigateByUrl(`/pmpl/${pmplId}`);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  

  


}
