import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefIndexComponent } from './ref-index.component';

describe('RefIndexComponent', () => {
  let component: RefIndexComponent;
  let fixture: ComponentFixture<RefIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefIndexComponent]
    });
    fixture = TestBed.createComponent(RefIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
