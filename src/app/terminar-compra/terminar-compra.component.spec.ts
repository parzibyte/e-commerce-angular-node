import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarCompraComponent } from './terminar-compra.component';

describe('TerminarCompraComponent', () => {
  let component: TerminarCompraComponent;
  let fixture: ComponentFixture<TerminarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
