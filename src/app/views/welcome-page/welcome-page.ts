import { Component, inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PadelService } from '../../services/padel.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',

})
export class WelcomePage {

  private padelService = inject(PadelService);

  sites = this.padelService.getSites();
}
