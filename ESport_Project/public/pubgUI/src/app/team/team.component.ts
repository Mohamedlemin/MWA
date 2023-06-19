import { Component, OnInit } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../models/pmpl.modle';

let apiLoaded = false;
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   constructor(private _pmplService : PmplDataService,private _activatedRoute:ActivatedRoute){}
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


}
