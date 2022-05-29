import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {CarriageTable} from "./data/carriages.data";
import {SiteTable} from "./data/sites.data";
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() {
  }

  createDb() {
    const db = {
      carriages: CarriageTable.carriages,
      sites: SiteTable.sites,
    }
    return db;
  }

}
