import { Injectable } from '@angular/core';
import {combineLatest, Observable, tap} from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import {CarriageModel} from "./carriages/store/carriages.model";
import {Carriage} from "./data/carriages.data";
import {map} from "rxjs/operators";
import {SitesService} from "./sites.service";
import {Site} from "./data/sites.data";

const CARRIAGE_URL = 'api/carriages';
const SITE_URL = 'api/sites';

@Injectable()
export class CarriageService {

  constructor(private requestService: RequestService,
              private sitesService: SitesService) { }

  getCarriages(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    const carriages$ = this.requestService.get<Carriage[]>(`${CARRIAGE_URL}/?deleted=false`, httpOptions)
    const sites$ = this.requestService.get<Site[]>(`${SITE_URL}/?deleted=false`, httpOptions)

    return combineLatest(
      [carriages$, sites$],
      (carriages, sites) =>
        carriages.map((c) => ({
          ...c,
          siteName: sites.filter((s) => s.id === c.siteId).map(s => s.name)[0],
        }))
    ).pipe(tap(x  =>  console.log("GETTER",x)))
  }

  getCarriage(carriageId: string): Observable<any>{
    return this.requestService.get(`${CARRIAGE_URL}/${carriageId}`);
  }

  createCarriage(carriage: CarriageModel): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.post(`${CARRIAGE_URL}`, carriage, httpOptions);
  }

  updateCarriage(carriage: CarriageModel): Observable<any> {
    console.log(carriage)
    return this.requestService.put(`${CARRIAGE_URL}/`, carriage);
  }

  deleteCarriage(carriage: CarriageModel): Observable<any> {
    carriage = Object.assign({}, carriage, {deleted: true})
    return this.updateCarriage(carriage)
  }

  /*
  eventNameExists(name: string): Observable<boolean> {
    return this.getEvents().pipe(
      map(events => {
        return events.findIndex(event => event.name === name) !== -1;
      })
    );
  }

   */

}
