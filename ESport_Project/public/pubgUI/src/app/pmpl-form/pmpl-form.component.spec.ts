import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmplFormComponent } from './pmpl-form.component';

describe('PmplFormComponent', () => {
  let component: PmplFormComponent;
  let fixture: ComponentFixture<PmplFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmplFormComponent]
    });
    fixture = TestBed.createComponent(PmplFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
