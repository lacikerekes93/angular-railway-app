import { Component, OnInit } from '@angular/core';
import {SiteModel} from "../store/sites.model";
import { Observable } from 'rxjs';
import {selectSites} from "../store/sites.selectors";
import { Store, select } from '@ngrx/store';
import {SitesService} from "../../sites.service";
import {siteDeleteAction, sitesRequestedAction} from "../store/sites.actions";

@Component({
  selector: 'app-sites-table',
  templateUrl: './sites-table.component.html',
  styleUrls: ['./sites-table.component.css']
})
export class SitesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'owner', 'address', 'code', 'actions'];

  dataSource$: Observable<SiteModel[]> = this.store.pipe(select(selectSites));

  constructor(private sitesService: SitesService,
              private store: Store) { }

  ngOnInit() {
    this.store.dispatch(sitesRequestedAction());
  }

  onDelete(site: SiteModel): void {
    this.store.dispatch(siteDeleteAction({site}));
  }

}
