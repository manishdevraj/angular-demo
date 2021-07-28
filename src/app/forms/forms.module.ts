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
import { FORMS } from './forms.index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingWrapperComponent } from '../rating-wrapper/rating-wrapper.component';
import { AggridWrapperComponent } from '../aggrid-wrapper/aggrid-wrapper.component';
import { AgGridModule } from 'ag-grid-angular';
import { registerAgGridComponent} from '../aggrid-wrapper/aggrid-wrapper.formio'
import { registerRatingComponent } from '../rating-wrapper/rating-wrapper.formio';
// Make sure we use fontawesome everywhere in Form.io renderers.
(Formio as any).icons = 'fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
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
    AggridWrapperComponent
  ],
  bootstrap: [
    FormsComponent
  ]
})
export class FormsModule { 
  constructor(injector: Injector) {
    registerAgGridComponent(injector);
    registerRatingComponent(injector);
  }
}
