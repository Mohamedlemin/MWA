import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  childX! : number ;
  @Input()
  childY! : number ;
  childZ! : number ;

  @Output()
  addEvent : EventEmitter<number> = new EventEmitter<number>();
  
  add(){
    this.childZ = this.childY + this.childY
    this.addEvent.emit(this.childZ)
  }
}
