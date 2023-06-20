import { Component, OnInit } from '@angular/core';
import { Team, pmpl } from '../models/pmpl.modle';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tems-form',
  templateUrl: './tems-form.component.html',
  styleUrls: ['./tems-form.component.css']
})
export class TemsFormComponent implements OnInit {

  // form: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     firstName: '',
  //     lastName: '',
  //     bestMomentClip: '',
  //     descriptionClip: '',
  //     players: this.fb.group({
  //       p1Name: '',
  //       p1Role: '',
  //       p1Picture: '',
  //       p2Name: '',
  //       p2Role: '',
  //       p2Picture: '',
  //       p3Name: '',
  //       p3Role: '',
  //       p3Picture: '',
  //       p4Name: '',
  //       p4Role: '',
  //       p4Picture: ''
  //     }),
  //     teamLogo: ''
  //   });
  // }

  ngOnInit() {
  }

  onSubmit() {
    
  }


}
