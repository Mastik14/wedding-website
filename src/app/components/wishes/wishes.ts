import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.html',
  styleUrl: './wishes.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Wishes {

}
