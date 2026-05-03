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

  private hasUserScrolled = false;
  private hasAnimated = false;

  public ngAfterViewInit(): void {
    const el = this.venueImage.nativeElement;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!this.hasUserScrolled) return;

        if (entry.isIntersecting && !this.hasAnimated) {
          this.triggerAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(el);
  }

  @HostListener('window:scroll')
  public onScroll(): void {
    this.hasUserScrolled = true;
  }

  private triggerAnimation() {
    const el = this.venueImage.nativeElement;

    if (this.hasAnimated) return;

    el.classList.add('active');
    this.hasAnimated = true;
  }

  public openMap(): void {
    const url = 'https://maps.app.goo.gl/nZ4x7aA95gs9XMSQ8';

    window.open(url, '_blank');
  }
}
