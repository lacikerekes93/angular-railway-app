import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CarriageService } from '../../carriage.service';
import {CarriageActionTypes, carriagesLoadedAction} from "./carriage.actions";

@Injectable()
export class CarriageEffects {

  loadCarriages$ = createEffect(() => this.actions$.pipe(
    ofType(CarriageActionTypes.carriagesRequested),
    mergeMap(() => this.carriageService.getCarriages()
      .pipe(
        map(carriages => (carriagesLoadedAction({carriages}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private carriageService: CarriageService
  ) {}
}
