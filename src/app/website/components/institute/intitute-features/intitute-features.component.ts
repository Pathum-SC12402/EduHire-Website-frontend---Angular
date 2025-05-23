import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-intitute-features',
  imports: [],
  templateUrl: './intitute-features.component.html',
  styleUrl: './intitute-features.component.scss'
})
export class IntituteFeaturesComponent {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
