import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDeleteComponent } from './ref-delete.component';

describe('RefDeleteComponent', () => {
  let component: RefDeleteComponent;
  let fixture: ComponentFixture<RefDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefDeleteComponent]
    });
    fixture = TestBed.createComponent(RefDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
