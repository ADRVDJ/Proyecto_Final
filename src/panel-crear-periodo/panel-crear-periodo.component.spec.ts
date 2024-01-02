import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearPeriodoComponent } from './panel-crear-periodo.component';

describe('PanelCrearPeriodoComponent', () => {
  let component: PanelCrearPeriodoComponent;
  let fixture: ComponentFixture<PanelCrearPeriodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCrearPeriodoComponent]
    });
    fixture = TestBed.createComponent(PanelCrearPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
