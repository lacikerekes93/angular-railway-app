import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {CarriageService} from "../../carriage.service";
import {Router} from "@angular/router";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-carriage-create',
  templateUrl: './carriage-create.component.html',
  styleUrls: ['./carriage-create.component.css']
})
export class CarriageCreateComponent implements OnInit {

  carriageForm!: FormGroup;

  constructor(
    @Optional() public dialogRef: MatDialogRef<CarriageCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private carriageService: CarriageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carriageForm = this.formBuilder.group({
      'carriageId': [''],
      'railId': [''],
      'manufacturedYear': [''],
      'owner': [''],
      'site': [''],
    });
  }

  onSubmit(carriageData: any) {
    alert('Form submitted:\n' + JSON.stringify(carriageData));
    this.carriageService.createCarriage(carriageData).subscribe(res => {
      this.carriageForm.reset();
      this.router.navigate(['/carriages']);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

