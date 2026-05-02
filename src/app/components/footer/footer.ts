import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private targetDate = new Date('2026-08-08T00:00:00');

  private now = signal(Date.now());

  constructor() {
    setInterval(
      () => {
        this.now.set(Date.now());
      },
      60 * 60 * 1000,
    );
  }

  public daysLeft = computed(() => {
    const diff = this.targetDate.getTime() - this.now();

    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  });
}
