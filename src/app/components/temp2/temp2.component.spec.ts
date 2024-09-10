import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMP2Component } from './temp2.component';

describe('TEMP2Component', () => {
  let component: TEMP2Component;
  let fixture: ComponentFixture<TEMP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMP2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
