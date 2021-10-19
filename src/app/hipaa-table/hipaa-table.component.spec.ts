import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipaaTableComponent } from './hipaa-table.component';

describe('HipaaTableComponent', () => {
  let component: HipaaTableComponent;
  let fixture: ComponentFixture<HipaaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipaaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipaaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
