import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {  MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from './custom-date-adapter';
import { FormControl } from '@angular/forms';
import ValidatorUtility from '../../../utilities/validator.utility';
import { dateFormat } from '../../../utilities/constant';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: dateFormat, // this is how your date will be parsed from Input
  },
  display: {
    dateInput: dateFormat, // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }]
})

export class DatePickerComponent implements OnInit {
  @Input() title: string = 'Date';
  @Input() inputDate: string = '';
  @Input() disabled: boolean = false;

  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  date = new FormControl();
  
  constructor(private dateAdapter: DateAdapter<Date>) {
   // this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    if(this.inputDate) {
      const parseDate = ValidatorUtility.parseStringToDate(this.inputDate);
      this.date = new FormControl(parseDate);
    }
  }
 
  handleDOBChange(event: any) {
    const dateStr = this.dateAdapter.format(event.value, dateFormat);
    this.dateChange.emit(dateStr);
  }

}
