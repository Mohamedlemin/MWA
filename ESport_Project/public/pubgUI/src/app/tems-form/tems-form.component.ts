import { Component, OnInit } from '@angular/core';
import { Team } from '../models/pmpl.modle';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tems-form',
  templateUrl: './tems-form.component.html',
  styleUrls: ['./tems-form.component.css']
})
export class TemsFormComponent implements OnInit {
   
  teamForm: Team ={
    _id:'',
    name: '',
    country: '',
    Best_Moment_clip: '',
    Description_clip: '',
    teamLogo:'',
    players: [ {
      name:'',
      picture: '',
      role: '',
    },
    // {
    //   name:'',
    //   country: '',
    //   role: '',
    //   _id: ''
    // },
    // {
    //   name:'',
    //   country: '',
    //   role: '',
    //   _id: ''
    // },
    // {
    //   name:'',
    //   country: '',
    //   role: '',
    //   _id: ''
    // }
  ]
    
  };
  
  pmplId!:string

  constructor(private teamService: TeamServiceService,
    private activeRoute : ActivatedRoute) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  onSubmit() {
    console.log(this.teamForm);
    const id = this.activeRoute.snapshot.params['pmplId']; 
    this.pmplId =id

    this.teamService.create(this.teamForm,this.pmplId)
      .subscribe({
        next: (response:any) => {
          console.log('Team created successfully:', response);
        },
        error: (error:any) => {
          console.error('Error creating team:', error);
        }
      });
  }
}