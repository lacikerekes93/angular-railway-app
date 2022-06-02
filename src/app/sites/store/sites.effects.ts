import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {EMPTY, tap} from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { SitesService } from '../../sites.service';
import { SiteActionTypes, sitesLoadedAction, sitesRequestedAction, siteCreatedAction, siteLoadedAction, siteUpdatedAction } from './sites.actions';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from '@ngrx/effects';
import { selectNextSiteId } from './sites.selectors';
import { SiteModel } from './sites.model';
import {CarriageActionTypes, carriagesRequestedAction} from "../../carriages/store/carriages.actions";

@Injectable()
export class SiteEffects {

  loadSites$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.sitesRequested),
    mergeMap(() => this.sitesService.getSites()
      .pipe(
        map(sites => (sitesLoadedAction({sites}))),
        catchError(() => EMPTY)
      ))
    )
  );
  loadSite$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.siteRequested),
    switchMap((action: any) => this.sitesService.getSite(action.siteId)
      .pipe(
        map(site => (siteLoadedAction({site}))),
        catchError(() => EMPTY)
      ))
    )
  );

  createSite$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.siteCreate),
    concatLatestFrom((action: SiteModel) => this.store.select(selectNextSiteId)),
    switchMap(([action, id]) => {
      return this.sitesService.createSite(action).pipe(
        map((item: any) => {
            return siteCreatedAction({site: {
                id,
                name: action['name'],
                owner: action['owner'],
                address: action['address'],
                code: action['code'],
                deleted: false
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  updateSite$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.siteUpdate),
    switchMap((action) => {
      return this.sitesService.updateSite(action).pipe(
        map((item: any) => {
            return siteUpdatedAction({site: {
                id: action['id'],
                name: action['name'],
                owner: action['owner'],
                address: action['address'],
                code: action['code'],
                deleted: false
            }});
        }),
        catchError(() => EMPTY)
      )
    })
  ))

  deleteSite$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.siteDelete),
    switchMap((action: any) => {
      console.log(action)
      return this.sitesService.deleteSite(action.site).pipe(
        map((item: any) => {
          return sitesRequestedAction();
        }),
        catchError((err) => {
          console.error(err);
          return EMPTY;
        })
      )
    })
  ))

  reactivateSite$ = createEffect(() => this.actions$.pipe(
    ofType(SiteActionTypes.siteReactivate),
    switchMap((action: any) => {
      console.log(action)
      return this.sitesService.reactivateSite(action.site).pipe(
        map((item: any) => {
          return sitesRequestedAction();
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
    private sitesService: SitesService,
    private store: Store
  ) {}
}
