import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RLayoutComponent } from './r-layout.component';

describe('RLayoutComponent', () => {
  let component: RLayoutComponent;
  let fixture: ComponentFixture<RLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RLayoutComponent]
    });
    fixture = TestBed.createComponent(RLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
