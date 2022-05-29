import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarriagesComponentSpec} from './carriages/carriages.component.spec'
import { CarriagesTableComponent } from './carriages-table/carriages-table.component';
import { CarriagesCreateComponent } from './carriages-create/carriages-create.component';
import {CarriagesUpdateComponent} from "./carriages-update/carriages-update.component";

const routes: Routes = [
  { path: '',
    component: CarriagesComponentSpec,
    children: [{
      path: '',
      children: [
        {
          path: '',
          component: CarriagesTableComponent
        },
        {
          path: 'edit/:carriageId',
          component: CarriagesUpdateComponent
        },
        {
          path: 'create',
          component: CarriagesCreateComponent
        }
      ]
    }]
  },
  { path: '', redirectTo: '/carriages', pathMatch: 'full' },
  { path: '**', component: CarriagesTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarriagesRoutingModule { }
