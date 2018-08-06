import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-buscador',
  templateUrl: './ruta-buscador.component.html',
  styleUrls: ['./ruta-buscador.component.css']
})
export class RutaBuscadorComponent implements OnInit {

  constructor() { }

  usuarios=[{},{}];
  conductores=[{},{}];
  autos=[{},{}];
  botonUsuario="Visitar"
  botonAuto="Pedir transferencia";
  ngOnInit() {
  }

}
