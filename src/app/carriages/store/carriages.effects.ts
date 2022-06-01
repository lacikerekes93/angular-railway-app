import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/effects';
import {combineLatestWith, EMPTY, tap} from 'rxjs';
import { map, mergeMap, catchError, switchMap, combineLatest } from 'rxjs/operators';
import { CarriageService } from '../../carriage.service';
import { SitesService } from '../../sites.service';
import {
  CarriageActionTypes,
  carriageCreatedAction, carriageLoadedAction,
  carriagesLoadedAction,
  carriagesRequestedAction,
  carriageUpdateAction,
} from "./carriages.actions";
import {selectNextCarriageId} from "./carriages.selectors";
import {Store} from "@ngrx/store";
import {CarriageModel} from "./carriages.model";

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

  loadCarriage$ = createEffect(() => this.actions$.pipe(
      ofType(CarriageActionTypes.carriageRequested),
      switchMap((action: any) => this.carriageService.getCarriage(action.carriageId)
        .pipe(
          map(carriage => (carriageLoadedAction({carriage}))),
          catchError(() => EMPTY)
        ))
    )
  );

  createCarriage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CarriageActionTypes.carriageCreate),
      concatLatestFrom((action: CarriageModel) => this.store.select(selectNextCarriageId)),
      switchMap(([action, id]) => {
        console.log(action, id);
        return this.carriageService.createCarriage(action).pipe(
          map((item: any) => {
            return carriageCreatedAction({
              carriage: {
                id: action.id,
                manufacturedYear: action.manufacturedYear,
                railId: action.railId,
                owner: action.owner,
                siteId: action.siteId,
                siteName: '',
                deleted: false
              }
            });
          }),
          catchError(() => EMPTY)
        )
      })
    );
  })

  updateCarriage$ = createEffect(() => this.actions$.pipe(
    ofType(CarriageActionTypes.carriageUpdate),
    switchMap((action) => {
      console.log("ACTION", action)
      return this.carriageService.updateCarriage(action).pipe(
        map((item: any) => {
          return carriageUpdateAction({carriage: {
              id: action['id'],
              manufacturedYear: action['manufacturedYear'],
              railId: action['railId'],
              owner: action['owner'],
              siteId: action['siteId'],
              siteName: '',
              deleted: false
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  deleteCarriage$ = createEffect(() => this.actions$.pipe(
    ofType(CarriageActionTypes.carriageDelete),
    switchMap((action: any) => {
      console.log(action)
      return this.carriageService.deleteCarriage(action.carriage).pipe(
        map((item: any) => {
          return carriagesRequestedAction();
        }),
        catchError((err) => {
          console.error(err);
          return EMPTY;
        })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private carriageService: CarriageService,
    private sitesService: SitesService,
    private store: Store
  ) {}
}
