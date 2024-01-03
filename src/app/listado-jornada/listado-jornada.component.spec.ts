import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJornadaComponent } from './listado-jornada.component';

describe('ListadoJornadaComponent', () => {
  let component: ListadoJornadaComponent;
  let fixture: ComponentFixture<ListadoJornadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoJornadaComponent]
    });
    fixture = TestBed.createComponent(ListadoJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
