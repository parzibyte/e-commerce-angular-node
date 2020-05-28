import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeVentaComponent } from './detalle-de-venta.component';

describe('DetalleDeVentaComponent', () => {
  let component: DetalleDeVentaComponent;
  let fixture: ComponentFixture<DetalleDeVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
