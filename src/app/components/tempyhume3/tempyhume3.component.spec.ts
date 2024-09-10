import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPYHUME3Component } from './tempyhume3.component';

describe('TEMPYHUME3Component', () => {
  let component: TEMPYHUME3Component;
  let fixture: ComponentFixture<TEMPYHUME3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMPYHUME3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMPYHUME3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
