import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TourDetail {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-tour-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-section.component.html',
  styleUrls: ['./tour-section.component.scss']
})
export class TourSectionComponent {
  protected readonly tourDetails: TourDetail[] = [
    { label: '4 Bedrooms', icon: 'bed' },
    { label: '2 Bathrooms', icon: 'bath' },
    { label: '1 Carport', icon: 'car' },
    { label: '2 Floors', icon: 'floor' }
  ];
}
