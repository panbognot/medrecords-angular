import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsentModalNzComponent } from './add-consent-modal-nz.component';

describe('AddConsentModalNzComponent', () => {
  let component: AddConsentModalNzComponent;
  let fixture: ComponentFixture<AddConsentModalNzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsentModalNzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsentModalNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
