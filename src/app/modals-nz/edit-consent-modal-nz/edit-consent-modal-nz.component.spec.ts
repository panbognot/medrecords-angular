import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsentModalNzComponent } from './edit-consent-modal-nz.component';

describe('EditConsentModalNzComponent', () => {
  let component: EditConsentModalNzComponent;
  let fixture: ComponentFixture<EditConsentModalNzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsentModalNzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsentModalNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
