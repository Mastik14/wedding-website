import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.html',
  styleUrl: './venue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Venue {
  @ViewChild('venueImage', { static: true }) venueImage!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.venueImage.nativeElement.classList.add('active');
          observer.disconnect(); // чтобы не дёргалось повторно
        }
      },
      {
        threshold: 0.6, // важно! появляется когда блок уже хорошо виден
      }
    );

    observer.observe(this.venueImage.nativeElement);
  }

  public openMap(): void {
    const url = 'https://maps.app.goo.gl/nZ4x7aA95gs9XMSQ8';

    window.open(url, '_blank');
  }
}
