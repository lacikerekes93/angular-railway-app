import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarriagesComponent} from './carriages.component'
import { CarriageTableComponent } from './carriage-table/carriage-table.component';
import { CarriageCreateComponent } from './carriage-create/carriage-create.component';

const routes: Routes = [
  { path: '',
    component: CarriagesComponent,
    children: [{
      path: '',
      children: [
        {
          path: '',
          component: CarriageTableComponent
        },
        {
          path: 'create',
          component: CarriageCreateComponent
        }
      ]
    }]
  },
  { path: '', redirectTo: '/carriages', pathMatch: 'full' },
  { path: '**', component: CarriageTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarriagesRoutingModule { }
