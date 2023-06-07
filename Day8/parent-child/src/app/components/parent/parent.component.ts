import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentX: number = 4
  parentY: number = 3
  parentZ!: number;

  // updateZ(event){
  //   console.log(event)
  // }

}
