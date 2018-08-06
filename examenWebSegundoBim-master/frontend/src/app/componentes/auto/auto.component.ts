import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  constructor() { }

  @Input()
  nombreModelo:string;

  @Input()
  nombreMarca:string;

  @Input()
  anio:string;

  @Input()
  colorUno:string;

  @Input()
  colorDos:string;

  @Input()
  chasis:string;

  @Input()
  identificador:string;

  solicitar(identificador){

  }

  ngOnInit() {
  }

}
