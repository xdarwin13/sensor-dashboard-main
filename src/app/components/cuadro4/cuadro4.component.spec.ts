import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadro4Component } from './cuadro4.component';

describe('Cuadro4Component', () => {
  let component: Cuadro4Component;
  let fixture: ComponentFixture<Cuadro4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cuadro4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cuadro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
