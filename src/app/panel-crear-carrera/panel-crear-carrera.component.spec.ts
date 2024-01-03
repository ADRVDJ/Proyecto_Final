import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCrearCarreraComponent } from './panel-crear-carrera.component';

describe('PanelCrearCarreraComponent', () => {
  let component: PanelCrearCarreraComponent;
  let fixture: ComponentFixture<PanelCrearCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCrearCarreraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelCrearCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
