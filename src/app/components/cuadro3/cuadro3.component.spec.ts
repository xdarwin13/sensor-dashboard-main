import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro3Component } from './cuadro3.component';

describe('Cuadro3Component', () => {
  let component: Cuadro3Component;
  let fixture: ComponentFixture<Cuadro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cuadro3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuadro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
