import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPeticionComponent } from './ruta-peticion.component';

describe('RutaPeticionComponent', () => {
  let component: RutaPeticionComponent;
  let fixture: ComponentFixture<RutaPeticionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaPeticionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPeticionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
