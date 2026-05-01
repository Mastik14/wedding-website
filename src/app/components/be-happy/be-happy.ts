import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-be-happy',
  templateUrl: './be-happy.html',
  styleUrl: './be-happy.scss',
})
export class BeHappy {
  @ViewChild('happyBlock') happyBlock!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.happyBlock.nativeElement.classList.add('active');
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(this.happyBlock.nativeElement);
  }
}
