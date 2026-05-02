import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-be-happy',
  templateUrl: './be-happy.html',
  styleUrl: './be-happy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeHappy {
  @ViewChild('happyBlock') happyBlock!: ElementRef;

  public ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.happyBlock.nativeElement.classList.add('active');
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(this.happyBlock.nativeElement);
  }
}
