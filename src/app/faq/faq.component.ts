import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  // animations: [
  //   trigger('faqContentAnimation', [
  //     transition(':click', [
  //       style({ opacity: 0 }),
  //       animate('500ms ease-in', style({ opacity: 1 })),
  //     ]),
  //     transition(':click', [animate('500ms ease-out', style({ opacity: 0 }))]),
  //   ]),
  // ],
})
export class FaqComponent {
  showContent: boolean = false;
  openItemId: number | null = null;
  faqItems = [
    {
      question: 'Will Eilera tell me exactly how much fertilizer to use?',
      answer: 'Eilera goes beyond generic recommendations. By analyzing your specific soil data and crop needs, Eilera suggests the right type and amount of fertilizer for optimal growth. This helps you avoid under or over-fertilizing, optimizing resource use and crop health.',
    },
    {
      question: 'What kind of data does Eilera use?',
      answer: '',
    },
    {
      question: 'Is Eilera only for experienced farmers?',
      answer: '',
    },
    {
      question: 'Does Eilera require a paid subscription?',
      answer: '',
    },
    {
      question: 'How does Eilera connect me with agricultural experts?',
      answer: '',
    },
  ];

  toggleContent(index: number): void {
    this.openItemId = this.openItemId === index ? null : index;
  }
}
