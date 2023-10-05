import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FFooterComponent } from './f-footer.component';

describe('FooterComponent', () => {
  let component: FFooterComponent;
  let fixture: ComponentFixture<FFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FFooterComponent]
    });
    fixture = TestBed.createComponent(FFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
