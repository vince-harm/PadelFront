import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PadelService } from '../../services/padel.service'; // Ajuste le chemin selon ta structure

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',

  //encapsulation: ViewEncapsulation.None
})
export class WelcomePage {

  private padelService = inject(PadelService);

  // Récupération des données pour le @for dans le HTML
  sites = this.padelService.getSites();
}
