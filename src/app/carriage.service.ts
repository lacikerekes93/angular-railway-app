import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import {CarriageModel} from "./carriages/store/carriages.model";

const CARRIAGE_URL = 'api/carriages';

@Injectable()
export class CarriageService {

  constructor(private requestService: RequestService) { }

  getCarriages(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<any>(CARRIAGE_URL, httpOptions);
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${CARRIAGE_URL}/${carriage.id}`;
    return this.requestService.delete(url, httpOptions);
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
