import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefEditComponent } from './ref-edit.component';

describe('RefEditComponent', () => {
  let component: RefEditComponent;
  let fixture: ComponentFixture<RefEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefEditComponent]
    });
    fixture = TestBed.createComponent(RefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
