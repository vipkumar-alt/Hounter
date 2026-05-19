import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TestimonialCard {
  title: string;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  protected readonly testimonialCards: TestimonialCard[] = [
    {
      title: 'Best house through Hounter',
      image: '/assets/testimonial-card-1.png',
      alt: 'Jenny Wilson review card for a modern house'
    },
    {
      title: 'House for myself',
      image: '/assets/testimonial-card-2.png',
      alt: 'Ronald Richards review card for a house with a white roof'
    },
    {
      title: 'House sold fast',
      image: '/assets/testimonial-card-3.png',
      alt: 'Dianne Russell review card for a red-roof house'
    }
  ];

  protected activeTestimonialIndex = 0;

  protected get activeTestimonialCard(): TestimonialCard {
    return this.testimonialCards[this.activeTestimonialIndex];
  }

  protected get previousTestimonialCard(): TestimonialCard {
    const previousIndex =
      (this.activeTestimonialIndex - 1 + this.testimonialCards.length) %
      this.testimonialCards.length;

    return this.testimonialCards[previousIndex];
  }

  protected get nextTestimonialCard(): TestimonialCard {
    const nextIndex = (this.activeTestimonialIndex + 1) % this.testimonialCards.length;

    return this.testimonialCards[nextIndex];
  }

  protected setTestimonial(index: number): void {
    this.activeTestimonialIndex = index;
  }

  protected showPreviousTestimonial(): void {
    this.activeTestimonialIndex =
      (this.activeTestimonialIndex - 1 + this.testimonialCards.length) %
      this.testimonialCards.length;
  }

  protected showNextTestimonial(): void {
    this.activeTestimonialIndex = (this.activeTestimonialIndex + 1) % this.testimonialCards.length;
  }
}
