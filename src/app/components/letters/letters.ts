import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Letters {
  @ViewChild('lettersBlock') lettersBlock!: ElementRef;

ngAfterViewInit() {
  const el = this.lettersBlock.nativeElement;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('active');
      }
    },
    { threshold: 0.25 }
  );

  observer.observe(el);
}
}
