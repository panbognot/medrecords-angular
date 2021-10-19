import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePatientConsentModalComponent } from './delete-patient-consent-modal.component';

describe('DeletePatientConsentModalComponent', () => {
  let component: DeletePatientConsentModalComponent;
  let fixture: ComponentFixture<DeletePatientConsentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePatientConsentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePatientConsentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
