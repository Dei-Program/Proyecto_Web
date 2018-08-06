import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecimientoComponent } from './ofrecimiento.component';

describe('OfrecimientoComponent', () => {
  let component: OfrecimientoComponent;
  let fixture: ComponentFixture<OfrecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfrecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
