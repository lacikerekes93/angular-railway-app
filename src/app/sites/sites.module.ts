import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';

import { SitesRoutingModule } from './sites-routing.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { SitesService } from '../sites.service';
import { SitesComponent } from './sites/sites.component';
import { SitesTableComponent } from './sites-table/sites-table.component';
import * as fromSites from './store/sites.reducer';
import { SiteEffects } from './store/sites.effects';
import {CarriagesModule} from "../carriages/carriages.module";
import { SitesCreateComponent } from './sites-create/sites-create.component';
import { SitesUpdateComponent } from './sites-update/sites-update.component';

@NgModule({
  imports: [
    CommonModule, SitesRoutingModule, FormsModule, ReactiveFormsModule, RouterModule,
    StoreModule.forFeature(fromSites.sitesFeatureKey, fromSites.sitesReducer),
    EffectsModule.forFeature([SiteEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    CarriagesModule
  ],
  declarations: [
    SitesComponent, SitesTableComponent, SitesCreateComponent, SitesUpdateComponent
  ],
  providers: [
    SitesService
  ]
})
export class SitesModule { }
