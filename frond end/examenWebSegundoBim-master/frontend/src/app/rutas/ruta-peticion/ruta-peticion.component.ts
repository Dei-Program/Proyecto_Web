import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-peticion',
  templateUrl: './ruta-peticion.component.html',
  styleUrls: ['./ruta-peticion.component.css']
})
export class RutaPeticionComponent implements OnInit {

  constructor() { }

  botonAuto="Pedir Transferencia";
  botonCargar="Cargar más";
  autos=[{},{},{},{},{},{},{},{}];
  mostrando="autos - 8";
  ngOnInit() {
  }

}
