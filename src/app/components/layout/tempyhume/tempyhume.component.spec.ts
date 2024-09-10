import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEMPYHUMEComponent } from './tempyhume.component';

describe('TEMPYHUMEComponent', () => {
  let component: TEMPYHUMEComponent;
  let fixture: ComponentFixture<TEMPYHUMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TEMPYHUMEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEMPYHUMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
