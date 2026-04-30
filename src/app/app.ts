import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { DateInvitation } from "./components/date-invitation/date-invitation";

@Component({
  selector: 'app-root',
  imports: [Header, DateInvitation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wedding-website');
}
