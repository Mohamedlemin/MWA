import { Component } from '@angular/core';
import { Job } from '../jobs/job.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jobform',
  templateUrl: './jobform.component.html',
  styleUrls: ['./jobform.component.css']
})
export class JobformComponent {
  
  constructor(private _apiService : ApiService ){}
   job ={} as  Job;
   
  //  salary!:String;
  //  description!:String;
  //  title!:String

   
   addOne(){
    console.log(this.job);
    this._apiService.create(this.job).subscribe({
       next:(createdJob) =>{ console.log("success",createdJob);
       },
       error : (err)=>{console.log("faild",err);
       }
    })
    // console.log(this.salary);
    // console.log(this.description);
    // console.log(this.title);
    
    
   }



}
