import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriageListComponent } from './carriage-list.component';

describe('CarriageListComponent', () => {
  let component: CarriageListComponent;
  let fixture: ComponentFixture<CarriageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarriageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
