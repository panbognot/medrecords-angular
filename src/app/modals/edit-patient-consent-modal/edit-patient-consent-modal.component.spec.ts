import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientConsentModalComponent } from './edit-patient-consent-modal.component';

describe('EditPatientConsentModalComponent', () => {
  let component: EditPatientConsentModalComponent;
  let fixture: ComponentFixture<EditPatientConsentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPatientConsentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientConsentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
