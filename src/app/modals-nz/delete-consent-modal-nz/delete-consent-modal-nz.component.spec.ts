import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsentModalComponent } from './delete-consent-modal.component';

describe('DeleteConsentModalComponent', () => {
  let component: DeleteConsentModalComponent;
  let fixture: ComponentFixture<DeleteConsentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConsentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConsentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
