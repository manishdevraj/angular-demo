import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Formio, FormioModule, FormioAppConfig, Templates } from '@formio/angular';
// import premium from '@formio/premium';
// Formio.use(premium);
import { FormioGrid } from '@formio/angular/grid';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { FormioResources } from '@formio/angular/resource';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';

//import customTemplate from './rating-wrapper/custom-template';

// Make sure we use fontawesome everywhere in Form.io renderers.
(Formio as any).icons = 'fontawesome';

/**
 * Import the Custom component CheckMatrix.
 */
// import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    FormioGrid,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/formsx.module').then(m => m.FormsxModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.EventModule)
      },
      {
        path: 'manager',
        loadChildren: () => import('./form/form.module').then(m => m.FormModule)
      }
    ], {useHash: true})
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
