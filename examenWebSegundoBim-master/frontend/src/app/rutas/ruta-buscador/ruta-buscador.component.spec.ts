import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBuscadorComponent } from './ruta-buscador.component';

describe('RutaBuscadorComponent', () => {
  let component: RutaBuscadorComponent;
  let fixture: ComponentFixture<RutaBuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBuscadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
