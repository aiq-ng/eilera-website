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
      answer: `Eilera goes beyond generic recommendations. By analyzing your specific soil data and crop needs, Eilera suggests the right type and amount of fertilizer for optimal growth. This helps you avoid under or over-fertilizing, optimizing resource use and crop health.`,
    },
    {
      question: 'What kind of data does Eilera use?',
      answer: `
      Eilera utilizes various data points to provide you with personalized insights. This includes:
      Soil data: You can import existing data or utilize Eilera's integration with soil testing services to understand your soil composition, nutrient levels, and pH balance.
      Weather data: Eilera accesses real-time and historical weather information like temperature, precipitation, and humidity to predict potential weather impacts on your crops.
      Planting choices: You can input information about the crops you're planting, allowing Eilera to consider factors like planting dates, spacing methods, and crop rotation strategies in its recommendations.`,
    },
    {
      question: 'Is Eilera only for experienced farmers?',
      answer: `UX design focuses on the overall experience of the user, including the ease of use, functionality, and emotional response to the product. UI design, on the other hand, focuses on the visual and interactive elements of the product, such as the layout, typography, and color scheme.`,
    },
    {
      question: 'Does Eilera require a paid subscription?',
      answer: `Eilera offers a freemium model. The basic version provides access to core features like soil data management and weather monitoring. Upgraded subscriptions unlock additional functionalities like advanced yield prediction and personalized recommendations tailored to your specific farm needs.`,
    },
    {
      question: 'How does Eilera connect me with agricultural experts?',
      answer: `Eilera provides access to a wealth of educational resources within the app. Additionally, premium subscriptions may offer features like connecting you with agricultural specialists who can address your specific farm-related questions and concerns.`,
    },
  ];

  toggleContent(index: number): void {
    this.openItemId = this.openItemId === index ? null : index;
  }
}
