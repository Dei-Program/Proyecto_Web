import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-perfil',
  templateUrl: './ruta-perfil.component.html',
  styleUrls: ['./ruta-perfil.component.css']
})
export class RutaPerfilComponent implements OnInit {

  peticiones=[{},{},];
  ofrecimientos=[{},{}];

  constructor() { }

  ngOnInit() {
  }

}
