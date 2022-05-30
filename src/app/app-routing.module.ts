import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'carriages',
    loadChildren: () => import('./carriages/carriages.module').then(m => m.CarriagesModule),
  },
  {
    path: 'sites',
    loadChildren: () => import('./sites/sites.module').then(m => m.SitesModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
