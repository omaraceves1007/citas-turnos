import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, /* HTTP_INTERCEPTORS */ } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from './area/area.component';

import { PagesRoutingModule } from './pages.route';
import { LoginComponent } from './login/login.component';
import { AltaComponent } from './area/alta/alta.component';
import { ModificarComponent } from './area/modificar/modificar.component';
import { BuscarComponent } from './area/buscar/buscar.component';


@NgModule({
  declarations: [
    LoginComponent,

    AreaComponent,
    AltaComponent,
    ModificarComponent,
    BuscarComponent

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
