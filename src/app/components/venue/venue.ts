import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.html',
  styleUrl: './venue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Venue {
  @ViewChild('venueImage', { static: true }) venueImage!: ElementRef;

  public ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.venueImage.nativeElement.classList.add('active');
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(this.venueImage.nativeElement);
  }

  public openMap(): void {
    const url = 'https://maps.app.goo.gl/nZ4x7aA95gs9XMSQ8';

    window.open(url, '_blank');
  }
}
