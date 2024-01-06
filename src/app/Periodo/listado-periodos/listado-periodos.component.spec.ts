import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeriodosComponent } from './listado-periodos.component';

describe('ListadoPeriodosComponent', () => {
  let component: ListadoPeriodosComponent;
  let fixture: ComponentFixture<ListadoPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPeriodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
