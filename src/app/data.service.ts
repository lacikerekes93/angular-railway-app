import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    return {
      carriages: [
        {
          carriageId: 'Bhv',
          manufacturedYear: 2020,
          railId: '50 55 20-05 555-7',
          owner: 'MÁV',
          site: 'Bp'
        },
        {
          carriageId: 'BDbhv',
          manufacturedYear: 2021,
          railId: '50 55 20-05 555-7',
          owner: 'MÁV',
          site: 'Bp'
        },
        {
          carriageId: 'AcBc',
          manufacturedYear: 2022,
          railId: '50 55 20-05 555-7',
          owner: 'MÁV',
          site: 'Bp'
        }
      ]
    };
  }
}
