import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from '@formio/angular';

@Component({
  selector: 'app-rating-wrapper',
  templateUrl: './rating-wrapper.component.html',
  styleUrls: ['./rating-wrapper.component.scss']
})
export class RatingWrapperComponent implements FormioCustomComponent<number> {

  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  disabled: boolean;

  /**ngOnInit(): void {
  }*/

  /*private _value: number;
  
  @Input()
  public set value(v: number | string) {
    this._value = coerceNumberProperty(v, undefined);
  }
  public get value(): number | string {
    return this._value;
  }*/
} 