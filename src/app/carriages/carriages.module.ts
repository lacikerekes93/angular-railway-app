import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarriageTableComponent } from './carriage-table/carriage-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarriageService} from "../carriage.service";
import { RouterModule } from '@angular/router';
import { CarriagesRoutingModule } from './carriage-routing.module';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import { CarriageCreateComponent } from './carriage-create/carriage-create.component';
import {CarriagesComponent} from "./carriages.component";
import { CarriageListComponent } from './carriage-list/carriage-list.component';
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromEvents from './store/carriages.reducer';
import {CarriageEffects} from "./store/carriages.effects";


@NgModule({
  declarations: [CarriagesComponent, CarriageTableComponent, CarriageListComponent, CarriageCreateComponent, CarriageListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarriagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forFeature(fromEvents.carriagesFeatureKey, fromEvents.carriagesReducer),
    EffectsModule.forFeature([CarriageEffects]),

  ],
  exports: [CarriageTableComponent, CarriageListComponent],
  providers: [
    CarriageService
  ]
})
export class CarriagesModule { }
