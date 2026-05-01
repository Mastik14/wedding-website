import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-venue',
  imports: [],
  templateUrl: './venue.html',
  styleUrl: './venue.scss',
})
export class Venue {
  @ViewChild('venue') venue!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.venue.nativeElement.classList.add('active');
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(this.venue.nativeElement);
  }
}
