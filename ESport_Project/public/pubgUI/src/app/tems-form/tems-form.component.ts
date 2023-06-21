import { Component, OnInit } from '@angular/core';
import { Team, pmpl } from '../models/pmpl.modle';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeamForm } from '../models/form-modle';
import { TeamServiceService } from '../team-service.service';

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
    players: [ {
      name:'',
      country: '',
      role: '',
      _id: ''
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

  constructor(private teamService: TeamServiceService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    console.log(this.teamForm);

    // this.teamService.create(this.teamForm.value)
    //   .subscribe({
    //     next: (response:any) => {
    //       console.log('Team created successfully:', response);
    //       // Reset the form after successful submission
    //       this.teamForm.reset();
    //     },
    //     error: (error:any) => {
    //       console.error('Error creating team:', error);
    //     }
    //   });
  }
}