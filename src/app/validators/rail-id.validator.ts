import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime } from 'rxjs/operators';
import {CarriageService} from "../carriage.service";

@Injectable()
export class RailIdValidator {

  constructor(private carriageService: CarriageService) {}

  railIdValidatorFn(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.carriageService.getCheckSum(control.value).pipe(
        map(exists => (exists ? { railId: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}




