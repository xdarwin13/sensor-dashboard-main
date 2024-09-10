import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUME3Component } from './hume3.component';

describe('HUME3Component', () => {
  let component: HUME3Component;
  let fixture: ComponentFixture<HUME3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HUME3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HUME3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
