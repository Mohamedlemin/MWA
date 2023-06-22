import { Component } from '@angular/core';
import { pmpl } from '../models/pmpl.modle';
import { PmplDataService } from '../pmpl-data.service';

@Component({
  selector: 'app-pmpl-form',
  templateUrl: './pmpl-form.component.html',
  styleUrls: ['./pmpl-form.component.css']
})
export class PmplFormComponent {

  pmplForm: pmpl ={
    _id:'',
    title: '',
    prize: '',
    region: '',
    teams: []
    
  };


  constructor(private pmpService:PmplDataService){}

  onSubmit(): void {
   // const { _id, ...pmplFormWithoutId } = this.pmplForm;
    this.pmpService.create(this.pmplForm)
    .subscribe({
      next: (response:any) => {
        console.log('Park created successfully:', response);
        this.pmplForm={
          _id:'',
          title: '',
          prize: '',
          region: '',
          teams: []
        };
      },
      error:( error:any) => {
        console.error('Error creating park:', error);
      }
    });

  }
 

}
