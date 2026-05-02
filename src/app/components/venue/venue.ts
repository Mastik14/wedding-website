import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.html',
  styleUrl: './venue.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Venue {
  @ViewChild('venue') venue!: ElementRef;

  public ngAfterViewInit(): void {
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

  public openMap(): void {
    const url = 'https://maps.app.goo.gl/nZ4x7aA95gs9XMSQ8';

    window.open(url, '_blank');
  }
}
