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

  id!: String;

  selectedOption!: number;

  filter!: string;

  // Pagination parameters.
  // p: number = 1;
  // count: number = 4;

  constructor(private _jobService: ApiService) {}

  ngOnInit(): void {
    this.getAll();
    this.getSize();
    console.log(this.previousDisnable);
    console.log(this.nextDisnable);
    console.log(this.listSize);
  }
  offset = 0;
  count = 5;
  previousDisnable: boolean = true;
  nextDisnable: boolean = false;
  listSize!: number;
  filteredJobs!: Job[];

  //  previous!:number;

  onOptionChange() {
    console.log('Selected option:', this.selectedOption);
    this.count = this.selectedOption;
    this.getAll();
  }

  onSelectChange(selectedValue: any) {
    console.log(selectedValue.value);
    this.count = parseInt(selectedValue.value);

    this.getAll();

    // Do something with the selected value
  }

  previous() {
    this.offset = this.offset - this.count;
    if (this.offset <= 0) {
      this.previousDisnable = true;
    }
    this.nextDisnable = false;
    console.log(' prevous : ', this.previousDisnable);
    console.log('offset :', this.offset);
    console.log('count :', this.count);

    this.getAll();
  }
  next() {
    this.offset = this.offset + this.count;
    if (this.offset + this.count >= this.listSize) {
      this.nextDisnable = true;
    }
    console.log('offset :', this.offset);
    console.log('count :', this.count);

    this.previousDisnable = false;

    this.getAll();
  }

  getAll() {
    this._jobService.getAll(this.offset, this.count).subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.filteredJobs = this.jobs;
        console.log(jobs);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getSize() {
    this._jobService.getSize().subscribe({
      next: (size) => {
        this.listSize = size;
        console.log(size);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  filterJobByTitle(title: string): void {
    this.filteredJobs =
      title.length > 0
        ? this.jobs.filter((job) => {
            job.title == title;
          })
        : this.jobs;
    console.log(this.filteredJobs);
  }

  

  // getOne(id){
  //   this._jobService.getOne(id).subscribe({
  //     next:(job) =>{

  //     }
  //   })

  // }
}
