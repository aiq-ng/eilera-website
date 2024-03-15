import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  contents: any = [
    {
      text: 'Farmers',
    },
   
    {
      text: 'Research Institutions',
    },
    {
      text: 'Consultants',
    },
    {
      text: 'Agribusiness',
    },
    {
      text: 'Government Agencies',
    },
    {
      text: 'Financial Institutions',
    },
    {
      text: 'Insurance Companies',
    },
  ];
  view: string = 'Farmers';

  changeView(view: string) {
    this.view = view;
  }
}
