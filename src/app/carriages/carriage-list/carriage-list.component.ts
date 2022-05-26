import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CarriageService} from "../../carriage.service";

@Component({
  selector: 'app-carriage-list',
  templateUrl: './carriage-list.component.html',
  styleUrls: ['./carriage-list.component.css']
})
export class CarriageListComponent implements OnInit {

  carriages$: Observable<any>;

  constructor(private carriageService: CarriageService) {
    this.carriages$ = this.carriageService.getCarriages();
  }

  ngOnInit() {
    this.carriages$ = this.carriageService.getCarriages();
  }

}
