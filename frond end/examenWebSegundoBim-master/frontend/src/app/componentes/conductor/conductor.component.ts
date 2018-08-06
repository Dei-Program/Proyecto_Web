import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  constructor() { }
  urlImagen="/assets/imagenes/2.PNG"

  @Input()
  nombre:string;

  @Input()
  numeroMedallas:string;

  @Input()
  campeonActual:string;


  ngOnInit() {
  }

}
