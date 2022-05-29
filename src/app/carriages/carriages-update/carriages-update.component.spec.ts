import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriagesUpdateComponent } from './carriages-update.component';

describe('CarriagesUpdateComponent', () => {
  let component: CarriagesUpdateComponent;
  let fixture: ComponentFixture<CarriagesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriagesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriagesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
