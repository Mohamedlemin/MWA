import { Component } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { pmpl } from '../models/pmpl.modle';

@Component({
  selector: 'app-edit-pmpl',
  templateUrl: './edit-pmpl.component.html',
  styleUrls: ['./edit-pmpl.component.css']
})
export class EditPmplComponent {
  constructor(private pmplService : PmplDataService
    ,private activeRoute : ActivatedRoute){}

    pmplForm= {} as pmpl ;  
    pmplId:any;

    ngOnInit(): void {
      this.getPmplByIdFromRoute();
    }

    getPmplByIdFromRoute(): void {
      this.pmplId = this.activeRoute.snapshot.paramMap.get('id');
      this.pmplService.getOne(this.pmplId).subscribe({
        next: (pmpl) => {
          this.pmplForm = pmpl;
          console.log('pmpl retrieved successfully:', this.pmplForm);
        },
        error: (error) => {
          console.error('Error retrieving park:', error);
        }
      });
    }

    onSubmit(): void {
      // const { _id, ...pmplFormWithoutId } = this.pmplForm;
      this.pmplService.create(this.pmplForm)
      .subscribe({
        next: (response:any) => {
          console.log('Pmpl updated successfully:', response);
          this.pmplForm= {
            _id:'',
            title: '',
            prize: '',
            region: '',
            teams: []
          };
        },
        error:( error:any) => {
          console.error('Error updating pmpl:', error);
        }
      });
  
    }
}
