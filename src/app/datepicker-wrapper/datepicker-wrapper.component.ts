import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent, FormioEvent } from '@formio/angular';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-wrapper',
  templateUrl: './datepicker-wrapper.component.html',
  styleUrls: ['./datepicker-wrapper.component.scss']
})
export class DatepickerWrapperComponent implements FormioCustomComponent<string> {
  value: string;
  
  valueChange: EventEmitter<string>;

  disabled: boolean;

  constructor(private ngbCalendar: NgbCalendar) {}

}
