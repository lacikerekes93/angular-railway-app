import {Component, Inject, OnInit, Optional} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {CarriageService} from "../../carriage.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {carriageCreateAction} from "../store/carriages.actions";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-carriages-create',
  templateUrl: './carriages-create.component.html',
  styleUrls: ['./carriages-create.component.css']
})
export class CarriagesCreateComponent implements OnInit {

  carriageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carriageService: CarriageService,
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.carriageForm = this.formBuilder.group({
      'id': [''],
      'railId': [''],
      'manufacturedYear': [''],
      'owner': [''],
      'site': [''],
    });
  }

  onSubmit(carriageData: any) {
    alert('Form submitted:\n' + JSON.stringify(carriageData));
    carriageData.deleted = false;
    this.store.dispatch(carriageCreateAction(carriageData))
    this.carriageForm.reset();
    this.router.navigate(['/carriages']);
  }
}

