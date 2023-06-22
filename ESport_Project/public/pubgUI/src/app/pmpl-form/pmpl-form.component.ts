import { Component } from '@angular/core';
import { pmpl } from '../models/pmpl.modle';

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

 

}
