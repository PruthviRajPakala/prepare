import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css'
})
export class DateComponent {

date = new Date;





}
