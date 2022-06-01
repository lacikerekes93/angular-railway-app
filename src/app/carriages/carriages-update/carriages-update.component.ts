import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {carriageRequestedAction, carriageUpdateAction} from "../store/carriages.actions";
import {selectCarriages, selectLoadedCarriage} from '../store/carriages.selectors';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Carriage} from "../../data/carriages.data";
import {CarriageModel} from "../store/carriages.model";

@Component({
  selector: 'app-carriages-update',
  templateUrl: './carriages-update.component.html',
  styleUrls: ['./carriages-update.component.css']
})
export class CarriagesUpdateComponent implements OnInit {

  carriageForm!: FormGroup;
  carriages$: Observable<CarriageModel[]> = this.store.pipe(select(selectCarriages));

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private  router: Router,
              private store: Store) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => {
        return this.store.dispatch(carriageRequestedAction({carriageId: params.get('carriageId')!}))})
    ).subscribe();
    this.store.pipe(select(selectLoadedCarriage)).subscribe(
      carriage => {
        console.log(carriage);
        console.log(this.carriageForm);
        if(carriage && this.carriageForm) {
          this.carriageForm.controls['id'].setValue(carriage.id);
          this.carriageForm.controls['manufacturedYear'].setValue(carriage.manufacturedYear);
          this.carriageForm.controls['railId'].setValue(carriage.railId);
          this.carriageForm.controls['owner'].setValue(carriage.owner);
          this.carriageForm.controls['siteId'].setValue(+carriage.siteId);
        }
      }
    );
    this.carriageForm = this.formBuilder.group({
      'id':[''],
      'manufacturedYear': [''],
      'railId': [''],
      'owner':[''],
      'siteId': [''],
      'deleted': [false]
    });

    this.carriages$.subscribe(a => console.log('CARRIAGES', a));
  }

  onSubmit(carriageData: any) {
    console.log("CARRIAGEDATA", carriageData)
    this.store.dispatch(carriageUpdateAction(carriageData));
    this.carriageForm.reset();
    this.router.navigate(['/carriages']);
  }

}
