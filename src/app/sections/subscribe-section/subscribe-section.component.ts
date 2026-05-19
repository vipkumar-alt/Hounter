import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})
export class SubscribeSectionComponent {
  protected readonly subscribeDecor = [
    { className: 'decor-chair', image: '/assets/subscribe-chair.png', alt: 'Chair interior' },
    { className: 'decor-robert', image: '/assets/subscribe-avatar-robert.png', alt: 'Robert Fox' },
    { className: 'decor-jenny', image: '/assets/subscribe-avatar-jenny.png', alt: 'Jenny Wilson' },
    { className: 'decor-house', image: '/assets/subscribe-house.png', alt: 'House exterior' },
    { className: 'decor-building', image: '/assets/subscribe-building.png', alt: 'Modern building' },
    { className: 'decor-courtney', image: '/assets/subscribe-avatar-courtney.png', alt: 'Courtney Henry' },
    { className: 'decor-dianne', image: '/assets/subscribe-avatar-dianne.png', alt: 'Dianne Russell' },
    { className: 'decor-palm', image: '/assets/subscribe-palm.png', alt: 'Palm leaves' }
  ];
}
