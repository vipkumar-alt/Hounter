import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PropertyListing {
  title: string;
  price: string;
  owner: string;
  location: string;
  image: string;
  avatar: string;
}

@Component({
  selector: 'app-featured-house-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-house-section.component.html',
  styleUrls: ['./featured-house-section.component.scss']
})
export class FeaturedHouseSectionComponent {
  protected readonly featuredHomes: PropertyListing[] = [
    {
      title: 'Roselands House',
      price: '$ 35.000.000',
      owner: 'Dianne Russell',
      location: 'Manchester, Kentucky',
      image: '/assets/featured-roselands.png',
      avatar: '/assets/avatar-dianne.png'
    },
    {
      title: 'Woodlandside',
      price: '$ 20.000.000',
      owner: 'Robert Fox',
      location: 'Dr. San Jose, South Dakota',
      image: '/assets/featured-woodlandside.png',
      avatar: '/assets/avatar-robert.png'
    },
    {
      title: 'The Old Lighthouse',
      price: '$ 44.000.000',
      owner: 'Ronald Richards',
      location: 'Santa Ana, Illinois',
      image: '/assets/featured-lighthouse.png',
      avatar: '/assets/avatar-ronald.png'
    },
    {
      title: "Cosmo's House",
      price: '$ 22.000.000',
      owner: 'Jenny Wilson',
      location: 'Preston Rd, Inglewood, Maine 98380',
      image: '/assets/featured-new-card.png',
      avatar: '/assets/avatar-jenny-featured.png'
    }
  ];

  protected scrollFeatured(scroller: HTMLElement, direction: number): void {
    const card = scroller.querySelector<HTMLElement>('.property-card');
    const gap = 32;
    const distance = (card?.offsetWidth ?? 376) + gap;

    scroller.scrollBy({
      left: direction * distance,
      behavior: 'smooth'
    });
  }
}
