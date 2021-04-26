import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, /* HTTP_INTERCEPTORS */ } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from './area/area.component';

import { PagesRoutingModule } from './pages.route';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    AreaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    PagesRoutingModule,

  ],
  exports: [
    LoginComponent,
    AreaComponent,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true  }
  ]
})
export class PagesModule { }
