import { Component } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pmpl } from '../models/pmpl.modle';
import { environment } from 'src/environments/environment.development';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-pmpl',
  templateUrl: './edit-pmpl.component.html',
  styleUrls: ['./edit-pmpl.component.css']
})
export class EditPmplComponent {
  constructor(private pmplService : PmplDataService,
    private toastr: ToastrService,
    private router: Router
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
        },
        error: (error) => {
           console.error('Error retrieving pmpl:', error);
        }
      });
    }

    onSubmit(): void {
      // const { _id, ...pmplFormWithoutId } = this.pmplForm;
      this.pmplService.create(this.pmplForm)
      .subscribe({
        next: (response:any) => {
          this.pmplForm= {
            _id:'',
            title: '',
            prize: '',
            region: '',
            teams: []
          };
          this.toastr.success(environment.Update_success, environment.Success);

          this.router.navigate(['/pmpl']);

        },
        error:( error:any) => {
          this.toastr.success(environment.update_Failed, environment.Error);
        }
      });
  
    }
}
