import {Component, input, output, signal} from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-date-selector',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './date-selector.html'
})
export class DateSelectorComponent {
  dateChange = output<Date>(); // On prévient le parent quand la date change
  courtName = input<string>('');
  initialDate = input<Date | null>(new Date());
  minDate = new Date(); // On ne peut pas réserver dans le passé
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)); // Max 2 mois à l'avance

  onDateChange(date: Date) {
    this.dateChange.emit(date);
  }
}
