import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  blogPosts: any = [
    {
      image: '/assets/images/blogOne.webp',
      text: 'The Future of Agriculture: Embracing Digital Transformation',
    },
    {
      image: '/assets/images/blogTwo.webp',
      text: 'Optimizing Crop Yields with Data-Driven Decisions',
    },
    {
      image: '/assets/images/blogThree.webp',
      text: 'Maximizing Crop Yields in Africa: A Guide to Local Success',
    },
  ];
}
