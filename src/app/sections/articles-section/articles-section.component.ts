import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ArticleCard {
  title: string;
  author: string;
  avatar: string;
  image: string;
  readTime: string;
  date: string;
}

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-section.component.html',
  styleUrls: ['./articles-section.component.scss']
})
export class ArticlesSectionComponent {
  protected readonly articles: ArticleCard[] = [
    {
      title: 'The things we need to check when we want to buy a house',
      author: 'Dianne Russell',
      avatar: '/assets/article-avatar-dianne.png',
      image: '/assets/article-living-room.png',
      readTime: '4 min read',
      date: '25 Apr 2021'
    },
    {
      title: '7 Ways to distinguish the quality of the house we want to buy',
      author: 'Courtney Henry',
      avatar: '/assets/article-avatar-courtney.png',
      image: '/assets/article-cottage.png',
      readTime: '6 min read',
      date: '24 Apr 2021'
    },
    {
      title: 'The best way to know the quality of the house we want to buy',
      author: 'Darlene Robertson',
      avatar: '/assets/article-avatar-darlene.png',
      image: '/assets/article-white-roof.png',
      readTime: '2 min read',
      date: '24 Apr 2021'
    }
  ];

  protected readonly mainArticle: ArticleCard = {
    title: '12 Things To Know Before Buying A House',
    author: 'Cameron Williamson',
    avatar: '/assets/article-avatar-cameron.png',
    image: '/assets/article-main-house.png',
    readTime: '8 min read',
    date: '25 Apr 2021'
  };
}
