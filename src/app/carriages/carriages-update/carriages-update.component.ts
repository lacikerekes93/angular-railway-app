import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {carriageRequestedAction, carriageUpdateAction} from "../store/carriages.actions";
import {selectCarriages, selectLoadedCarriage} from '../store/carriages.selectors';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Carriage} from "../../data/carriages.data";
import {CarriageModel} from "../store/carriages.model";
import {selectSites} from "../../sites/store/sites.selectors";
import {sitesRequestedAction} from "../../sites/store/sites.actions";

@Component({
  selector: 'app-carriages-update',
  templateUrl: './carriages-update.component.html',
  styleUrls: ['./carriages-update.component.css']
})
export class CarriagesUpdateComponent implements OnInit {

  carriageForm!: FormGroup;
  carriages$: Observable<CarriageModel[]> = this.store.pipe(select(selectCarriages));
  carriageId: string;

  sites$ = this.store.pipe(select(selectSites));

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private  router: Router,
              private store: Store) { }

  ngOnInit(): void {

    this.store.dispatch(sitesRequestedAction());

    this.route.paramMap.pipe(
      map(params => {
        this.carriageId = params.get('carriageId');
        return this.store.dispatch(carriageRequestedAction({carriageId: params.get('carriageId')!}))})
    ).subscribe();
    this.store.pipe(select(selectLoadedCarriage)).subscribe(
      carriage => {
        console.log(carriage);
        console.log(this.carriageForm);
        if(carriage && this.carriageForm) {
          this.carriageForm.controls['manufacturedYear'].setValue(carriage.manufacturedYear);
          this.carriageForm.controls['railId'].setValue(carriage.railId);
          this.carriageForm.controls['owner'].setValue(carriage.owner);
          this.carriageForm.controls['siteId'].setValue(+carriage.siteId);
        }
      }
    );
    this.carriageForm = this.formBuilder.group({
      'railId': ['', [Validators.required, Validators.maxLength(20)]],
      'manufacturedYear': ['',[Validators.required, Validators.min(1920)]],
      'owner': ['',[Validators.required, Validators.maxLength(10)]],
      'siteId': [''],
      'deleted': [false]
    });

    this.carriages$.subscribe(a => console.log('CARRIAGES', a));
  }

  onSubmit(carriageData: any) {
    carriageData.id = this.carriageId;
    carriageData.railId = carriageData.railId.replace(/\s/g, "");
    console.log("CARRIAGEDATA", carriageData)
    this.store.dispatch(carriageUpdateAction(carriageData));
    this.carriageForm.reset();
    this.router.navigate(['/carriages']);
  }

  get railId() { return this.carriageForm.get('railId'); }
  get manufacturedYear() { return this.carriageForm.get('manufacturedYear'); }
  get owner() { return this.carriageForm.get('owner'); }

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
