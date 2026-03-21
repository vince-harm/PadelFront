import { Component, output, signal } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-selector',
  standalone: true,
  providers: [provideNativeDateAdapter()], // Nécessaire pour MatDatepicker
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './date-selector.html'
})
export class DateSelectorComponent {
  dateChange = output<Date>(); // On prévient le parent quand la date change

  minDate = new Date(); // On ne peut pas réserver dans le passé
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)); // Max 2 mois à l'avance

  onDateChange(date: Date) {
    this.dateChange.emit(date);
  }
}
