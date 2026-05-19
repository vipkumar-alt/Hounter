import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FooterColumn {
  title: string;
  links: string[];
}

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss']
})
export class FooterSectionComponent {
  protected readonly footerColumns: FooterColumn[] = [
    { title: 'Property', links: ['House', 'Apartment', 'Villa'] },
    { title: 'Article', links: ['New Article', 'Popular Article', 'Most Read', 'Tips & Tricks'] }
  ];
}
