import { Component, OnInit } from '@angular/core';
import { CarriageService } from "../../carriage.service"
import { Store, select } from '@ngrx/store';
import { selectCarriages } from '../store/carriages.selectors';
import { carriagesRequestedAction, carriageDeleteAction } from '../store/carriages.actions';
import {CarriageModel} from "../store/carriages.model";

@Component({
  selector: 'app-carriages-table',
  templateUrl: './carriages-table.component.html',
  styleUrls: ['./carriages-table.component.css']
})
export class CarriagesTableComponent implements OnInit {

  displayedColumns: string[] = ['id','railId','site','actions'] ;

  constructor(
    private carriageService: CarriageService,
    private store: Store) { }

    dataSource$ = this.store.pipe(select(selectCarriages));

  ngOnInit() {
    this.store.dispatch(carriagesRequestedAction());
  }

  onDelete(carriage: CarriageModel): void {
    console.log(carriage);
    this.store.dispatch(carriageDeleteAction({carriage}));
  }
}
