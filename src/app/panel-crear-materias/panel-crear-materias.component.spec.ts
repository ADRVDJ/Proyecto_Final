import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearMateriasComponent } from './panel-crear-materias.component';

describe('PanelCrearMateriasComponent', () => {
  let component: PanelCrearMateriasComponent;
  let fixture: ComponentFixture<PanelCrearMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCrearMateriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelCrearMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
