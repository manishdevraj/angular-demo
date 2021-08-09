import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerWrapperComponent } from './datepicker-wrapper.component';

describe('DatepickerWrapperComponent', () => {
  let component: DatepickerWrapperComponent;
  let fixture: ComponentFixture<DatepickerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
