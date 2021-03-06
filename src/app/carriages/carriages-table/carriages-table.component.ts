import {Component, OnInit, ViewChild} from '@angular/core';
import { CarriageService } from "../../carriage.service"
import { Store, select } from '@ngrx/store';
import { selectCarriages } from '../store/carriages.selectors';
import { carriagesRequestedAction, carriageDeleteAction } from '../store/carriages.actions';
import {CarriageModel} from "../store/carriages.model";
import {ThemePalette} from '@angular/material/core';
import {filter, tap} from "rxjs";
import {map} from "rxjs/operators";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'app-carriages-table',
  templateUrl: './carriages-table.component.html',
  styleUrls: ['./carriages-table.component.css']
})
export class CarriagesTableComponent implements OnInit {

  displayedColumns: string[] = ['id','railId','siteName','actions'] ;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  filteredOnSite = false;

  constructor(
    private store: Store) { }

  @ViewChild(MatSort) sort: MatSort;

    dataSource$ = this.store.pipe(select(selectCarriages));

    carriages$ = this.dataSource$.pipe(
      map((carriages: CarriageModel[]) => carriages.filter(c => c.deleted === false)));

  ngOnInit() {
    this.store.dispatch(carriagesRequestedAction());
  }

  showAllCarriages(){
    this.filteredOnSite = false;
    if (this.checked) {
      this.carriages$ = this.dataSource$;
    }else{
      this.carriages$ = this.dataSource$.pipe(
        map((carriages: CarriageModel[]) => carriages.filter(c => c.deleted === false)));
    }
  }

  toggleDeletedCarriages(changeEvent: MatSlideToggleChange) {
    this.filteredOnSite = false;
    if (changeEvent.checked) {
      this.carriages$ = this.dataSource$;
    }else{
      this.carriages$ = this.dataSource$.pipe(
        map((carriages: CarriageModel[]) => carriages.filter(c => c.deleted === false)));
    }
  }

  filterOnSite(siteId: number){
    this.filteredOnSite = true;
    this.checked = false;
    this.carriages$ = this.dataSource$.pipe(
      map((carriages: CarriageModel[]) => carriages.filter(
        c => (c.deleted === false && c.siteId === siteId))));
  }

  onDelete(carriage: CarriageModel): void {
    console.log(carriage);
    this.store.dispatch(carriageDeleteAction({carriage}));
  }
}


