import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { map, debounceTime, exhaustMap } from 'rxjs/operators';
import { Site } from './data/sites.data';
import { SiteModel } from './sites/store/sites.model';
import {CarriageService} from "./carriage.service";
import {CarriageModel} from "./carriages/store/carriages.model";

const SITE_URL = 'api/sites';

@Injectable()
export class SitesService {

  constructor(private requestService: RequestService, private carriageService: CarriageService) {
  }

  getSites(): Observable<Site[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.requestService.get<Site[]>(`${SITE_URL}/`, httpOptions);
  }

  getSite(siteId: number): Observable<any> {
    return this.requestService.get(`${SITE_URL}/${siteId}`);
  }

  createSite(site: SiteModel): Observable<any> {
    return this.requestService.post(`${SITE_URL}/`, site);
  }

  updateSite(site: SiteModel): Observable<any> {
    return this.requestService.put(`${SITE_URL}/`, site);
  }

  deleteSite(site: SiteModel): Observable<any> {
    return this.carriageService.getCarriages().pipe(
      exhaustMap(res => {
        if (res.filter((c: CarriageModel) => c.siteId === site.id && c.deleted===false).length > 0) {
          throw new Error('Cannot delete site!');
        }
        site = Object.assign({}, site, {deleted: true});
        return this.updateSite(site);
      })
    );
  }

  reactivateSite(site: SiteModel): Observable<any> {
    site = Object.assign({}, site, {deleted: false});
    return this.updateSite(site);
  }
}


