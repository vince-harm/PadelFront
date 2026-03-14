import { Component, inject} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PadelService } from '../../services/padel.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.css',

})
export class WelcomePage {

  private padelService = inject(PadelService);

  // Récupération des données pour le @for dans le HTML
  sites = this.padelService.getSites();
}
