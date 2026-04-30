import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { DateInvitation } from "./components/date-invitation/date-invitation";
import { Venue } from "./components/venue/venue";

@Component({
  selector: 'app-root',
  imports: [Header, DateInvitation, Venue],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wedding-website');
}
