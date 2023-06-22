import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemsFormComponent } from './tems-form.component';

describe('TemsFormComponent', () => {
  let component: TemsFormComponent;
  let fixture: ComponentFixture<TemsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemsFormComponent]
    });
    fixture = TestBed.createComponent(TemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
