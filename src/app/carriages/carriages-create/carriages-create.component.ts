import {Component, Inject, OnInit, Optional} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {carriageCreateAction, carriagesRequestedAction} from "../store/carriages.actions";
import {selectSites} from "../../sites/store/sites.selectors";
import {sitesRequestedAction} from "../../sites/store/sites.actions";
import {map} from "rxjs/operators";
import {SiteModel} from "../../sites/store/sites.model";
import {filter} from "rxjs";

@Component({
  selector: 'app-carriages-create',
  templateUrl: './carriages-create.component.html',
  styleUrls: ['./carriages-create.component.css']
})
export class CarriagesCreateComponent implements OnInit {

  carriageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store,
  ) { }

  sites$ = this.store.pipe(select(selectSites)).pipe(map((sites: SiteModel[]) => sites.filter((site: SiteModel) => site.deleted === false)));

  ngOnInit() {

    this.store.dispatch(sitesRequestedAction());

    this.carriageForm = this.formBuilder.group({
      'id': ['', [Validators.required, Validators.maxLength(10)]],
      'railId': ['', [Validators.required, Validators.maxLength(20)]],
      'manufacturedYear': ['',[Validators.required, Validators.min(1920)]],
      'owner': ['',[Validators.required, Validators.maxLength(10)]],
      'siteId': [''],
      'deleted':[false]
    });

    this.sites$.subscribe(s => console.log(s))
  }

  onSubmit(carriageData: any) {
    carriageData.railId = carriageData.railId.replace(/\s/g, "");
    carriageData.deleted = false;
    this.store.dispatch(carriageCreateAction(carriageData))
    this.carriageForm.reset();
    this.router.navigate(['/carriages']);
  }

  get id() { return this.carriageForm.get('id'); }
  get railId() { return this.carriageForm.get('railId'); }
  get manufacturedYear() { return this.carriageForm.get('manufacturedYear'); }
  get owner() { return this.carriageForm.get('owner'); }

  getIdErrorMessage() {
    if (this.id.dirty || this.id.touched) {
      if (this.id.hasError('required')) return 'You must enter a value!';
      if (this.id.hasError('maxlength')) return 'You can enter at most 10 characters!';
    }
    return '';
  }

  getRailIdErrorMessage() {
    if (this.railId.dirty || this.railId.touched) {
      if (this.railId.hasError('required')) return 'You must enter a value!';
      if (this.railId.hasError('maxlength')) return 'You can enter at most 20 characters!';
    }
    return '';
  }

  getManufacturedYearErrorMessage() {
    if (this.manufacturedYear.dirty || this.manufacturedYear.touched) {
      if (this.manufacturedYear.hasError('required')) return 'You must enter a value!';
      if (this.manufacturedYear.hasError('min')) return 'Value must be greater than 1920!';
    }
    return '';
  }

  getOwnerErrorMessage() {
    if (this.owner.dirty || this.owner.touched) {
      if (this.owner.hasError('required')) return 'You must enter a value!';
      if (this.owner.hasError('maxlength')) return 'You can enter at most 10 characters!';
    }
    return '';
  }



}

