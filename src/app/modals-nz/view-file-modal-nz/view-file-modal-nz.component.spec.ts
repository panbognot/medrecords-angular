import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileModalNzComponent } from './view-file-modal-nz.component';

describe('ViewFileModalNzComponent', () => {
  let component: ViewFileModalNzComponent;
  let fixture: ComponentFixture<ViewFileModalNzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFileModalNzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFileModalNzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
