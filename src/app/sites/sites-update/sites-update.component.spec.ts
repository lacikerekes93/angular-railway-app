import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesUpdateComponent } from './sites-update.component';

describe('SitesUpdateComponent', () => {
  let component: SitesUpdateComponent;
  let fixture: ComponentFixture<SitesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
