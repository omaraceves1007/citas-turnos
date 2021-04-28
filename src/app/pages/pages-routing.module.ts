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
  { path: 'categoriaArea',
    // canActivate: [ VerificaUserGuard ],
    loadChildren: () => import('./c-categoria-area/c-categoria-area.module').then( m => m.cCategoriaAreaModule )
  },
  // { path: '**', redirectTo: 'app/dashboard', pathMatch: 'full' }
  { path: 'servicio',
  // canActivate: [ VerificaUserGuard ],
  loadChildren: () => import('./servicio/servicio.module').then( m => m.ServicioModule )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
//
