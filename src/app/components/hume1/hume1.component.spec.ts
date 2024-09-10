import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HUME1Component } from './hume1.component';

describe('HUME1Component', () => {
  let component: HUME1Component;
  let fixture: ComponentFixture<HUME1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HUME1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HUME1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
