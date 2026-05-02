import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.html',
  styleUrl: './letters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Letters {

}
