import { Component } from '@angular/core';
import { pmpl } from '../models/pmpl.modle';
import { PmplDataService } from '../pmpl-data.service';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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


  constructor(private pmpService:PmplDataService,
    private toastr: ToastrService,
    private router: Router){}

  onSubmit(): void {
    // const { _id, ...pmplFormWithoutId } = this.pmplForm;
    this.pmpService.create(this.pmplForm)
    .subscribe({
      next: (response:any) => {
        // console.log('Pmpl created successfully:', response);
        this.pmplForm={
          _id:'',
          title: '',
          prize: '',
          region: '',
          teams: []
        };

        this.toastr.success(environment.Add_success, environment.Success);

        this.router.navigate(['/pmpl/']);
      },
      error:( error:any) => {
        // console.error('Error creating pmpl:', error);
        this.toastr.error(environment.Add_faild, environment.Error);

      }
    });

  }
 

}
