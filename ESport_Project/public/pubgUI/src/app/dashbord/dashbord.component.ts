import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
  animations: [
    trigger('countAnimation', [
      state('inactive', style({
        opacity: '0',
        transform: 'scale(0.5)',
      })),
      state('active', style({
        opacity: '1',
        transform: 'scale(1)',
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class DashbordComponent implements OnInit {
  counter: number = 0;
  targetNumber: number = 67843988;
  counterState: string = 'inactive';

  ngOnInit() {
    // Trigger the animation
    this.animateCounter();
  }

  animateCounter() {
    this.counterState = 'active';

    const timer = setInterval(() => {
      this.counter += Math.ceil(this.targetNumber / 200);

      if (this.counter >= this.targetNumber) {
        this.counter = this.targetNumber;
        clearInterval(timer);
      }
    }, 10);
  }

  onAnimationDone() {
    this.counterState = 'inactive';
  }
}
