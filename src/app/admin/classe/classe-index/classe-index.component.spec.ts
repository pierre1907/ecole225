import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseIndexComponent } from './classe-index.component';

describe('ClasseIndexComponent', () => {
  let component: ClasseIndexComponent;
  let fixture: ComponentFixture<ClasseIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasseIndexComponent]
    });
    fixture = TestBed.createComponent(ClasseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
