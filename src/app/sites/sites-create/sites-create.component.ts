import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CarriageService} from "../../carriage.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {siteCreateAction} from "../../sites/store/sites.actions";

@Component({
  selector: 'app-sites-create',
  templateUrl: './sites-create.component.html',
  styleUrls: ['./sites-create.component.css']
})
export class SitesCreateComponent implements OnInit {

  siteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private carriageService: CarriageService,
    private router: Router,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.siteForm = this.formBuilder.group({
      'name': [''],
      'owner': [''],
      'address': [''],
      'code': [''],
  });
  }

  onSubmit(siteData: any) {
    alert('Form submitted:\n' + JSON.stringify(siteData));
    siteData.deleted = false;
    this.store.dispatch(siteCreateAction(siteData))
    this.siteForm.reset();
    this.router.navigate(['/sites']);
  }
}
