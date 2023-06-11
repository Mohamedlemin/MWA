import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../jobs/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})

export class JobDetailsComponent implements OnInit {

  constructor(private _apiService : ApiService,
    private activeRoute : ActivatedRoute){}

     job!: Job
 
  ngOnInit(): void {
     this.getOne();
  }
  getOne(){
    const id = this.activeRoute.snapshot.params['id']; // Store the id in a variable for clarity and error handling

    this._apiService.getOne(id).subscribe(
      {
        next:(job)=>{this.job = job},
        error:(err)=>{console.log("err:" , err);
        }
      }
    )
  }

  deleteJob(id:String){
    this._apiService.deleteOne(id).subscribe({
      next: (res)=>{console.log("deleted success",res);
      },
      error:(err)=>{console.log("deleted success",err);
    }
  })}

 
  
  

}
