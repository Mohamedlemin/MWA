import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmplComponent } from './pmpl.component';

describe('PmplComponent', () => {
  let component: PmplComponent;
  let fixture: ComponentFixture<PmplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmplComponent]
    });
    fixture = TestBed.createComponent(PmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
