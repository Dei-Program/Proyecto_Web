import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Input()
  nombreBoton:string;
  constructor() { }

  @Input()
  classe:string="btn btn-info";


  @Output()
  darClick = new EventEmitter();

  ejecutarEvento() {
    console.log('dioclic');
    this.darClick.emit();
  }
  ngOnInit() {
  }

}
