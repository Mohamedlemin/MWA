import { Component, OnInit } from '@angular/core';
import { Team } from '../models/pmpl.modle';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tems-form',
  templateUrl: './tems-form.component.html',
  styleUrls: ['./tems-form.component.css']
})
export class TemsFormComponent  {
   
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
      role: ''
    },
    {
      name:'',
      picture: '',
      role: ''
    },
    {
      name:'',
      picture: '',
      role: ''
    },
    {
      name:'',
      picture: '',
      role: ''
    }
  ]
    
  };
  
  pmplId!:string

  constructor(private teamService: TeamServiceService,
    private activeRoute : ActivatedRoute,
    private toastr: ToastrService,
    private router: Router) {}

  
  onSubmit() {
    console.log(this.teamForm);

    const id = this.activeRoute.snapshot.params['pmplId']; 
    this.pmplId =id

    

    this.teamService.create(this.teamForm,this.pmplId)
      .subscribe({
        next: (response:any) => {
          // console.log('Team created successfully:', response);

        this.toastr.success(environment.Add_success, environment.Success);

        this.router.navigate(['/pmpl/'+this.pmplId]);
        },
        error: (error:any) => {
          // console.error('Error creating team:', error);
          this.toastr.error(environment.Add_failed, environment.Error);

        }
      });
  }
}