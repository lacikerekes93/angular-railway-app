import { Component, OnInit } from '@angular/core';
import { CarriageService } from "../../carriage.service"
import { Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCarriages } from '../store/carriages.selectors';
import { carriagesRequestedAction } from '../store/carriage.actions';

@Component({
  selector: 'app-carriage-table',
  templateUrl: './carriage-table.component.html',
  styleUrls: ['./carriage-table.component.css']
})
export class CarriageTableComponent implements OnInit {

  displayedColumns: string[] = ['carriageId','railId','site','actions'] ;

  constructor(
    private carriageService: CarriageService,
    private store: Store) { }

    dataSource$ = this.store.pipe(select(selectCarriages));

  ngOnInit() {
    this.store.dispatch(carriagesRequestedAction());
  }

}
