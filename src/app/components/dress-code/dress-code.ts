import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dress-code',
  imports: [],
  templateUrl: './dress-code.html',
  styleUrl: './dress-code.scss',
})
export class DressCode {
  @ViewChild('dressBlock') dressBlock!: ElementRef;

  ngAfterViewInit() {
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
