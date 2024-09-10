import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUME2Component } from './hume2.component';

describe('HUME2Component', () => {
  let component: HUME2Component;
  let fixture: ComponentFixture<HUME2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HUME2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HUME2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
