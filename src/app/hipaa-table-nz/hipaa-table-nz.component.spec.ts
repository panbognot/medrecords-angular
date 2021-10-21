import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipaaTableNzComponent } from './hipaa-table-nz.component';

describe('HipaaTableNzComponent', () => {
  let component: HipaaTableNzComponent;
  let fixture: ComponentFixture<HipaaTableNzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipaaTableNzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipaaTableNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
