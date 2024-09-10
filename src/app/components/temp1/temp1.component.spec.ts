import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMP1Component } from './temp1.component';

describe('TEMP1Component', () => {
  let component: TEMP1Component;
  let fixture: ComponentFixture<TEMP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMP1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
