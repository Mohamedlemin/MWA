import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPmplComponent } from './edit-pmpl.component';

describe('EditPmplComponent', () => {
  let component: EditPmplComponent;
  let fixture: ComponentFixture<EditPmplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPmplComponent]
    });
    fixture = TestBed.createComponent(EditPmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
