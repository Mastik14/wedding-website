import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { DateInvitation } from "./components/date-invitation/date-invitation";
import { Venue } from "./components/venue/venue";
import { TimingOfTheDay } from "./components/timing-of-the-day/timing-of-the-day";
import { DressCode } from "./components/dress-code/dress-code";
import { BeHappy } from "./components/be-happy/be-happy";

@Component({
  selector: 'app-root',
  imports: [Header, DateInvitation, Venue, TimingOfTheDay, DressCode, BeHappy],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('wedding-website');
}
