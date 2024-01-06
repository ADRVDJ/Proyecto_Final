import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCargoComponent } from './listado-cargo.component';

describe('ListadoCargoComponent', () => {
  let component: ListadoCargoComponent;
  let fixture: ComponentFixture<ListadoCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoCargoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
