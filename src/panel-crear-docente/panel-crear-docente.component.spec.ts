import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearDocenteComponent } from './panel-crear-docente.component';

describe('PanelCrearDocenteComponent', () => {
  let component: PanelCrearDocenteComponent;
  let fixture: ComponentFixture<PanelCrearDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCrearDocenteComponent]
    });
    fixture = TestBed.createComponent(PanelCrearDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
