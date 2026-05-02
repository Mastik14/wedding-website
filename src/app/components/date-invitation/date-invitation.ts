import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-date-invitation',
  templateUrl: './date-invitation.html',
  styleUrl: './date-invitation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInvitation {
  @ViewChild('block') block!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.block.nativeElement.classList.add('active');
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(this.block.nativeElement);
  }
}
