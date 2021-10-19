import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileModalComponent } from './view-file-modal.component';

describe('ViewFileModalComponent', () => {
  let component: ViewFileModalComponent;
  let fixture: ComponentFixture<ViewFileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
