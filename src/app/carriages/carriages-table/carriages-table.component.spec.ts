import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriagesTableComponent } from './carriages-table.component';

describe('CarriageTableComponent', () => {
  let component: CarriagesTableComponent;
  let fixture: ComponentFixture<CarriagesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriagesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
