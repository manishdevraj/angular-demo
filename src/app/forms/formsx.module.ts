import { Injector, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Formio, FormioModule } from '@formio/angular';
import { BuilderComponent } from './builder/builder.component';
import {CustomBuilderComponent} from './custom-builder/builder.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LanguageComponent } from './language/language.component';
import { PdfComponent } from './pdf/pdf.component';
import { RendererComponent } from './renderer/renderer.component';
import { SimpleComponent } from './simple/simple.component';
import { WizardComponent } from './wizard/wizard.component';
import { FormsComponent } from './forms/forms.component';
import { FORMS } from './formsx.index';
import { NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RatingWrapperComponent } from '../rating-wrapper/rating-wrapper.component';
import { AggridWrapperComponent } from '../aggrid-wrapper/aggrid-wrapper.component';
import { DatepickerWrapperComponent } from '../datepicker-wrapper/datepicker-wrapper.component';
import { CustomDateParserFormatter } from '../datepicker-wrapper/custom-date-parser-formatter';
import { AgGridModule } from 'ag-grid-angular';
import { registerAgGridComponent} from '../aggrid-wrapper/aggrid-wrapper.formio'
import { registerRatingComponent } from '../rating-wrapper/rating-wrapper.formio';
import { registerDatePickerComponent } from '../datepicker-wrapper/datepicker-wrapper.formio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Make sure we use fontawesome everywhere in Form.io renderers.
(Formio as any).icons = 'fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([{
      path: '',
      component: FormsComponent,
      children: FORMS
    }])
  ],
  declarations: [
    CustomBuilderComponent,
    BuilderComponent,
    KitchenComponent,
    LanguageComponent,
    PdfComponent,
    RendererComponent,
    SimpleComponent,
    WizardComponent,
    FormsComponent,
    RatingWrapperComponent,
    AggridWrapperComponent,
    DatepickerWrapperComponent
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  bootstrap: [
    FormsComponent,
    DatepickerWrapperComponent
  ]
})
export class FormsxModule { 
  constructor(injector: Injector) {
    registerAgGridComponent(injector);
    registerRatingComponent(injector);
    registerDatePickerComponent(injector);
  }
}
