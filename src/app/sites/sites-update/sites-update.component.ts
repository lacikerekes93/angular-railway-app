import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {map} from "rxjs/operators";
import {siteRequestedAction, siteUpdateAction} from "../store/sites.actions";
import {selectLoadedCarriage} from "../../carriages/store/carriages.selectors";
import {selectLoadedSite} from "../store/sites.selectors";

@Component({
  selector: 'app-sites-update',
  templateUrl: './sites-update.component.html',
  styleUrls: ['./sites-update.component.css']
})
export class SitesUpdateComponent implements OnInit {

  siteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private  router: Router,
              private store: Store) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        return this.store.dispatch(siteRequestedAction({siteId: +params.get('siteId')!}))})
    ).subscribe();
    this.store.pipe(select(selectLoadedSite)).subscribe(
      site => {
        console.log(site);
        console.log(this.siteForm);
        if(site && this.siteForm) {
          this.siteForm.controls['id'].setValue(site.id);
          this.siteForm.controls['name'].setValue(site.name);
          this.siteForm.controls['address'].setValue(site.address);
          this.siteForm.controls['owner'].setValue(site.owner);
          this.siteForm.controls['code'].setValue(site.code);
        }
      }
    );
    this.siteForm = this.formBuilder.group({
      'id':[''],
      'name': [''],
      'address': [''],
      'owner':[''],
      'code': [''],
      'deleted': [false]
    });
  }

  onSubmit(carriageData: any) {
    this.store.dispatch(siteUpdateAction(carriageData));
    this.siteForm.reset();
    this.router.navigate(['/sites']);
  }


}


