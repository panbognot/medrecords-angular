import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientConsentModalComponent } from './add-patient-consent-modal.component';

describe('AddPatientConsentModalComponent', () => {
  let component: AddPatientConsentModalComponent;
  let fixture: ComponentFixture<AddPatientConsentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientConsentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientConsentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
