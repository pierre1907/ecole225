import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFooterComponent } from './a-footer.component';

describe('AFooterComponent', () => {
  let component: AFooterComponent;
  let fixture: ComponentFixture<AFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFooterComponent]
    });
    fixture = TestBed.createComponent(AFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
