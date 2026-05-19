import { Component, ViewEncapsulation } from '@angular/core';

import { ArticlesSectionComponent } from './sections/articles-section/articles-section.component';
import { FeaturedHouseSectionComponent } from './sections/featured-house-section/featured-house-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { JoinSectionComponent } from './sections/join-section/join-section.component';
import { SubscribeSectionComponent } from './sections/subscribe-section/subscribe-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { TourSectionComponent } from './sections/tour-section/tour-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedHouseSectionComponent,
    TourSectionComponent,
    TestimonialsSectionComponent,
    ArticlesSectionComponent,
    SubscribeSectionComponent,
    JoinSectionComponent,
    FooterSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
