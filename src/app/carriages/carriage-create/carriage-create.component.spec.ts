import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriageCreateComponent } from './carriage-create.component';

describe('CarriageCreateComponent', () => {
  let component: CarriageCreateComponent;
  let fixture: ComponentFixture<CarriageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
