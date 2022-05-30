import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';
import { HttpHeaders } from '@angular/common/http';
import { map, debounceTime, exhaustMap } from 'rxjs/operators';
import { Site } from './data/sites.data';
import { SiteModel } from './sites/store/sites.model';
import {CarriageService} from "./carriage.service";

const SITE_URL = 'api/sites';

@Injectable()
export class SitesService {

  constructor(private requestService: RequestService,
  private carriageService: CarriageService) { }

  getSites(): Observable<Site[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.requestService.get<Site[]>(`${SITE_URL}/?deleted=false`, httpOptions);
  }

  getSite(siteId: number): Observable<any>{
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
        if(res.filter((b: any) => b.siteId === site.id).length > 0){
          throw new Error('Cannot delete site!');
        }
        site = Object.assign({}, site, {deleted: true});
        return this.updateSite(site);
      })
    );
  }

}
