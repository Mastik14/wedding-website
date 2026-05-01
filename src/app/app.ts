import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { DateInvitation } from "./components/date-invitation/date-invitation";
import { Venue } from "./components/venue/venue";
import { TimingOfTheDay } from "./components/timing-of-the-day/timing-of-the-day";
import { DressCode } from "./components/dress-code/dress-code";

@Component({
  selector: 'app-root',
  imports: [Header, DateInvitation, Venue, TimingOfTheDay, DressCode],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wedding-website');
}
