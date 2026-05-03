import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-date-invitation',
  templateUrl: './date-invitation.html',
  styleUrl: './date-invitation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateInvitation {
  @HostListener('window:load')
  public onLoad(): void {
    setTimeout(() => {
      this.block.nativeElement.classList.add('active');
    }, 200);
  }

  @ViewChild('block') block!: ElementRef;

  public ngAfterViewInit(): void {
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
