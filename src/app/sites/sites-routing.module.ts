import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SitesTableComponent } from './sites-table/sites-table.component';
import { SitesComponent } from './sites/sites.component';
import {SitesCreateComponent} from "./sites-create/sites-create.component";
import {SitesUpdateComponent} from "./sites-update/sites-update.component";

const routes: Routes = [
  { path: '',
    component: SitesComponent,
    children: [{
      path: '',
      children: [
        {
          path: '',
          component: SitesTableComponent
        },
        {
          path: 'create',
          component: SitesCreateComponent
        },
        {
          path: 'edit/:siteId',
          component: SitesUpdateComponent
        },
      ]
    }]
  },
  { path: '', redirectTo: '/sites', pathMatch: 'full' },
  { path: '**', component: SitesTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SitesRoutingModule { }
