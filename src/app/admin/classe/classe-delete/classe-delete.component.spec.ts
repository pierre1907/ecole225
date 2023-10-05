import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseDeleteComponent } from './classe-delete.component';

describe('ClasseDeleteComponent', () => {
  let component: ClasseDeleteComponent;
  let fixture: ComponentFixture<ClasseDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseDeleteComponent]
    });
    fixture = TestBed.createComponent(ClasseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
