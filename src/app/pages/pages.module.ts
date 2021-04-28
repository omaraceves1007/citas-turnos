import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, /* HTTP_INTERCEPTORS */ } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from './area/area.component';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../components/header/header.component';

import { AltaComponent } from './area/alta/alta.component';
import { ModificarComponent } from './area/modificar/modificar.component';
import { BuscarComponent } from './area/buscar/buscar.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,

    HeaderComponent,

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
