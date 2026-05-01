import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dress-code',
  templateUrl: './dress-code.html',
  styleUrl: './dress-code.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DressCode {
  @ViewChild('dressBlock') dressBlock!: ElementRef;

  public ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.dressBlock.nativeElement.classList.add('active');
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(this.dressBlock.nativeElement);
  }
}
