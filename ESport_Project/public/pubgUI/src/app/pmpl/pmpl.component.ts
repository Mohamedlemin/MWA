import { Component, OnInit } from '@angular/core';
import { PmplDataService } from '../pmpl-data.service';
import { pmpl } from '../models/pmpl.modle';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-pmpl',
  templateUrl: './pmpl.component.html',
  styleUrls: ['./pmpl.component.css'],
})
export class PmplComponent implements OnInit{
  
  constructor(private pmplService : PmplDataService,
    private authService:AuthService){}
  ngOnInit(): void {
    this.getAll()
  }

  offset =environment.zero;
  count=environment.five;
  pmpls!:pmpl[]

  

  getAll() {
    this.pmplService.getAll(this.offset, this.count).subscribe({
      next: (pmpls) => {
        this.pmpls = pmpls;
        console.log(pmpls);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  get isLoggedIn(): boolean {    
    return this.authService.islogging;
  }
}
