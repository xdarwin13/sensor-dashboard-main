import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMP3Component } from './temp3.component';

describe('TEMP3Component', () => {
  let component: TEMP3Component;
  let fixture: ComponentFixture<TEMP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMP3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
