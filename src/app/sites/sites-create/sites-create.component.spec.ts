import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesCreateComponent } from './sites-create.component';

describe('SitesCreateComponent', () => {
  let component: SitesCreateComponent;
  let fixture: ComponentFixture<SitesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
