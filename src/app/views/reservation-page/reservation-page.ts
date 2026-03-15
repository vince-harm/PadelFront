import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PadelService } from '../../services/padel.service';
import { PadelSite, PadelCourt } from '../../shared/site.model';

@Component({
  selector: 'app-reservation-page',
  standalone: true,
  templateUrl: './reservation-page.html'
})
export class ReservationPage implements OnInit {
  private route = inject(ActivatedRoute);
  private padelService = inject(PadelService);


  site = signal<PadelSite | undefined>(undefined);
  selectedCourt = signal<PadelCourt | undefined>(undefined);

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.padelService.getSiteById(id);
      this.site.set(found);
    }
  }

  selectCourt(court: PadelCourt) {
    this.selectedCourt.set(court);
  }
}
