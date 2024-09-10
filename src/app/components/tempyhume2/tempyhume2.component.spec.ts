import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPYHUME2Component } from './tempyhume2.component';

describe('TEMPYHUME2Component', () => {
  let component: TEMPYHUME2Component;
  let fixture: ComponentFixture<TEMPYHUME2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMPYHUME2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMPYHUME2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
