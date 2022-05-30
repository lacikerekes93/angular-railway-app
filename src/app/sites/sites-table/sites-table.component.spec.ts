import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesTableComponent } from './sites-table.component';

describe('SitesTableComponentComponent', () => {
  let component: SitesTableComponent;
  let fixture: ComponentFixture<SitesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
