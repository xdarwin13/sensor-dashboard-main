import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMP4Component } from './temp4.component';

describe('TEMP4Component', () => {
  let component: TEMP4Component;
  let fixture: ComponentFixture<TEMP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMP4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
