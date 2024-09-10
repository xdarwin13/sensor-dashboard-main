import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUME4Component } from './hume4.component';

describe('HUME4Component', () => {
  let component: HUME4Component;
  let fixture: ComponentFixture<HUME4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HUME4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HUME4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
