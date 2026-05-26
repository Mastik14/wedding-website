import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.html',
  styleUrl: './wishes.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wishes implements AfterViewInit {
  private host = inject(ElementRef);

  public ngAfterViewInit(): void {
    const elements = this.host.nativeElement.querySelectorAll('.animate');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    elements.forEach((el: Element) => observer.observe(el));
  }
}
