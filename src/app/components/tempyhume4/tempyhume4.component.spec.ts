import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPYHUME4Component } from './tempyhume4.component';

describe('TEMPYHUME4Component', () => {
  let component: TEMPYHUME4Component;
  let fixture: ComponentFixture<TEMPYHUME4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMPYHUME4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMPYHUME4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
