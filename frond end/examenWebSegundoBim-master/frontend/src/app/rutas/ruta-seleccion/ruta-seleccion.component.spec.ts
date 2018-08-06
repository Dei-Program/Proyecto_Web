import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSeleccionComponent } from './ruta-seleccion.component';

describe('RutaSeleccionComponent', () => {
  let component: RutaSeleccionComponent;
  let fixture: ComponentFixture<RutaSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
