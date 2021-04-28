import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    // canActivate: [ VerificaUserGuard ],
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  { path: 'area',
    // canActivate: [ VerificaUserGuard ],
    loadChildren: () => import('./area/area.module').then( m => m.AreaModule )
  },
  // { path: '**', redirectTo: 'app/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
//
