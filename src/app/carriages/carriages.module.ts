import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarriagesTableComponent } from './carriages-table/carriages-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CarriageService} from "../carriage.service";
import { RouterModule } from '@angular/router';
import { CarriagesRoutingModule } from './carriage-routing.module';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import {CarriagesCreateComponent} from './carriages-create/carriages-create.component';
import {CarriagesComponentSpec} from "./carriages/carriages.component.spec";
import {MatCardModule} from '@angular/material/card';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromEvents from './store/carriages.reducer';
import {CarriageEffects} from "./store/carriages.effects";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { CarriagesUpdateComponent } from './carriages-update/carriages-update.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {RemoveWhiteSpacePipe} from "../pipes/remove-whitespace.pipe";
import {RailIdValidator} from "../validators/rail-id.validator";


@NgModule({
  declarations: [CarriagesComponentSpec, CarriagesTableComponent, CarriagesCreateComponent, CarriagesCreateComponent, CarriagesUpdateComponent, RemoveWhiteSpacePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarriagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSortModule,
    StoreModule.forFeature(fromEvents.carriagesFeatureKey, fromEvents.carriagesReducer),
    EffectsModule.forFeature([CarriageEffects]),
  ],
  exports: [CarriagesTableComponent, CarriagesCreateComponent, CarriagesUpdateComponent],
  providers: [
    CarriageService, RailIdValidator
  ]
})
export class CarriagesModule { }
