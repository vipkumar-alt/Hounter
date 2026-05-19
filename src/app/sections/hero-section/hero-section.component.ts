import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Partner {
  name: string;
  className: string;
  logoSrc: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  protected readonly partners: Partner[] = [
    { name: 'Traveloka', className: 'traveloka', logoSrc: '/assets/logo-traveloka.png' },
    { name: 'tiket.com', className: 'tiket', logoSrc: '/assets/logo-tiket.svg' },
    { name: 'Airbnb', className: 'airbnb', logoSrc: '/assets/logo-airbnb.svg' },
    { name: 'Tripadvisor', className: 'tripadvisor', logoSrc: '/assets/logo-tripadvisor.svg' }
  ];
}
