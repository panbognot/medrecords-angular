import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachFileModalComponent } from './attach-file-modal.component';

describe('AttachFileModalComponent', () => {
  let component: AttachFileModalComponent;
  let fixture: ComponentFixture<AttachFileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachFileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
