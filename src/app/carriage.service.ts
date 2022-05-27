import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';

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

  getCarriage(carriageId: number): Observable<any>{
    return this.requestService.get(`${CARRIAGE_URL}/${carriageId}`);
  }

  createCarriage(carriage: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.post(`${CARRIAGE_URL}/create`, carriage, httpOptions);
  }

  updateCarriage(carriage: any): Observable<any> {
    return this.requestService.put(`${CARRIAGE_URL}/`, carriage);
  }

  deleteEvent(carriageId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const url = `${CARRIAGE_URL}/${carriageId}`;
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
