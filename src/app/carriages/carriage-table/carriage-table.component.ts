import { Component, OnInit } from '@angular/core';
import { CarriageService } from "../../carriage.service"
import { Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCarriages } from '../store/carriages.selectors';
import { carriagesRequestedAction } from '../store/carriage.actions';
import {CarriageCreateComponent} from "../carriage-create/carriage-create.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-carriage-table',
  templateUrl: './carriage-table.component.html',
  styleUrls: ['./carriage-table.component.css']
})
export class CarriageTableComponent implements OnInit {

  displayedColumns: string[] = ['carriageId','railId','site','actions'] ;

  constructor(
    private carriageService: CarriageService,
    public dialog: MatDialog,
    private store: Store) { }

    dataSource$ = this.store.pipe(select(selectCarriages));

  ngOnInit() {
    this.store.dispatch(carriagesRequestedAction());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CarriageCreateComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
