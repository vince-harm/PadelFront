import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WelcomePage} from './views/welcome-page/welcome-page';
import {Header} from './views/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WelcomePage, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PadelFront');
}
