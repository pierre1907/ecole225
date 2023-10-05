import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefAddComponent } from './ref-add.component';

describe('RefAddComponent', () => {
  let component: RefAddComponent;
  let fixture: ComponentFixture<RefAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefAddComponent]
    });
    fixture = TestBed.createComponent(RefAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
