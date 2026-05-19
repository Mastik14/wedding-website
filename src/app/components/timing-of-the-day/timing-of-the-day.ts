import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-timing-of-the-day',
  templateUrl: './timing-of-the-day.html',
  styleUrl: './timing-of-the-day.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TimingOfTheDay implements AfterViewInit {
  @ViewChild('skyImage') skyImage!: ElementRef;

  public ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(this.skyImage.nativeElement);
  }
}
