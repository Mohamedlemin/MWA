import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Job } from './job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {

  jobs!: Job[];
  
  id!:String;

  constructor(private _jobService: ApiService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._jobService.getAll().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        console.log(jobs);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }




  // getOne(id){
  //   this._jobService.getOne(id).subscribe({
  //     next:(job) =>{

  //     }
  //   })

  // }
}
