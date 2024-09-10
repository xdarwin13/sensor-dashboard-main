import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPYHUME1Component } from './tempyhume1.component';

describe('TEMPYHUME1Component', () => {
  let component: TEMPYHUME1Component;
  let fixture: ComponentFixture<TEMPYHUME1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMPYHUME1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMPYHUME1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
