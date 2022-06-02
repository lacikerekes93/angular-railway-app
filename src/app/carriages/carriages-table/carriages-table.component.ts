import { Component, OnInit } from '@angular/core';
import { CarriageService } from "../../carriage.service"
import { Store, select } from '@ngrx/store';
import { selectCarriages } from '../store/carriages.selectors';
import { carriagesRequestedAction, carriageDeleteAction } from '../store/carriages.actions';
import {CarriageModel} from "../store/carriages.model";
import {ThemePalette} from '@angular/material/core';
import {filter, tap} from "rxjs";
import {map} from "rxjs/operators";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

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

  constructor(
    private carriageService: CarriageService,
    private store: Store) { }

    dataSource$ = this.store.pipe(select(selectCarriages));

    carriages$ = this.dataSource$.pipe(
      map((carriages: CarriageModel[]) => carriages.filter(c => c.deleted === false)));

  ngOnInit() {
    this.store.dispatch(carriagesRequestedAction());
  }

  deletedCarriageToggle(changeEvent: MatSlideToggleChange) {
    if (changeEvent.checked) {
      this.carriages$ = this.dataSource$;
    }else{
      this.carriages$ = this.dataSource$.pipe(
        map((carriages: CarriageModel[]) => carriages.filter(c => c.deleted === false)));
    }
  }

  onDelete(carriage: CarriageModel): void {
    console.log(carriage);
    this.store.dispatch(carriageDeleteAction({carriage}));
  }
}


