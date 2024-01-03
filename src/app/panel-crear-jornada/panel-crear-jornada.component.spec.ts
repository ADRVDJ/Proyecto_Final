import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearJornadaComponent } from './panel-crear-jornada.component';

describe('PanelCrearJornadaComponent', () => {
  let component: PanelCrearJornadaComponent;
  let fixture: ComponentFixture<PanelCrearJornadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCrearJornadaComponent]
    });
    fixture = TestBed.createComponent(PanelCrearJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
