import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachFileModalNzComponent } from './attach-file-modal-nz.component';

describe('AttachFileModalNzComponent', () => {
  let component: AttachFileModalNzComponent;
  let fixture: ComponentFixture<AttachFileModalNzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachFileModalNzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachFileModalNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
