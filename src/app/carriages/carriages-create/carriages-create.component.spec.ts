import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriagesCreateComponent } from './carriages-create.component';

describe('CarriageCreateComponent', () => {
  let component: CarriagesCreateComponent;
  let fixture: ComponentFixture<CarriagesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriagesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriagesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
