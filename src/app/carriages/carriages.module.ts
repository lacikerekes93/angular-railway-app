import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarriageTableComponent } from './carriage-table/carriage-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarriageService} from "../carriage.service";
import { RouterModule } from '@angular/router';
import { CarriagesRoutingModule } from './carriage-routing.module';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {CarriageCreateComponent} from './carriage-create/carriage-create.component';
import {CarriagesComponent} from "./carriages.component";
import { CarriageListComponent } from './carriage-list/carriage-list.component';
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromEvents from './store/carriages.reducer';
import {CarriageEffects} from "./store/carriages.effects";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [CarriagesComponent, CarriageTableComponent, CarriageListComponent, CarriageCreateComponent,
    CarriageListComponent, CarriageCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarriagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forFeature(fromEvents.carriagesFeatureKey, fromEvents.carriagesReducer),
    EffectsModule.forFeature([CarriageEffects]),
  ],
  exports: [CarriageTableComponent, CarriageListComponent, CarriageCreateComponent],
  providers: [
    CarriageService,
    {
      provide: 'gadget-mlt',
      useValue: CarriageCreateComponent,
    },
    {provide:MatDialogRef , useValue:{} },

    { provide: MAT_DIALOG_DATA, useValue: {} }
  ]
})
export class CarriagesModule { }
