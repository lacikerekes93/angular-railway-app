import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { RequestService } from './request.service';
import { CarriagesModule } from './carriages/carriages.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CarriagesFeatureState} from "./carriages/store/carriages.reducer";

export interface AppState {
  carriagesFeatures: CarriagesFeatureState;
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    environment.isMockEnabled ? HttpClientInMemoryWebApiModule.forRoot(DataService) : [],
    HttpClientModule,
    CarriagesModule,
  ],
  providers: [RequestService, DataService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
