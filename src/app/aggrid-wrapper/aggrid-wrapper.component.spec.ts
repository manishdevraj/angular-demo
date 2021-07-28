import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridWrapperComponent } from './aggrid-wrapper.component';

describe('AggridWrapperComponent', () => {
  let component: AggridWrapperComponent;
  let fixture: ComponentFixture<AggridWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
