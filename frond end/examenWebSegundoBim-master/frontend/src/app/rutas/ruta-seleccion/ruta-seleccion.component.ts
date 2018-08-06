import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-seleccion',
  templateUrl: './ruta-seleccion.component.html',
  styleUrls: ['./ruta-seleccion.component.css']
})
export class RutaSeleccionComponent implements OnInit {

  constructor() { }

  botonAuto="Seleccionar Transferencia";
  botonCargar="Cargar más";
  autos=[{},{},{},{},{},{},{},{}];
  mostrando="autos - 8";

  ngOnInit() {
  }

}
