import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaAdministrativoComponent } from './sistema-administrativo.component';

describe('SistemaAdministrativoComponent', () => {
  let component: SistemaAdministrativoComponent;
  let fixture: ComponentFixture<SistemaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SistemaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(SistemaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
