import { Component, Input } from '@angular/core';
import {
  trigger,
  keyframes,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-eilera-content',
  templateUrl: './eilera-content.component.html',
  styleUrls: ['./eilera-content.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        animate(
          '0.3s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          '0.3s ease-out',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1 }),
          ])
        ),
      ]),
    ]),

    trigger('slideInOutTwo', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
    trigger('slideInOutThree', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class EileraContentComponent {
  @Input() value: string = 'Farmers';
}
