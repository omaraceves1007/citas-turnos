import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCategoriaAreaComponent } from './c-categoria-area.component';

const routes: Routes = [
  {
    path: '',
    component: CCategoriaAreaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cCategoriaAreaRoutingModule { }
