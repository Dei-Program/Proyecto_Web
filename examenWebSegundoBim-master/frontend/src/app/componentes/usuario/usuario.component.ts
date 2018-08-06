import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: Router) { }

  @Input()
  nick:string="Usuario";

  @Input()
  urlImagen:string="/assets/imagenes/1.png";

  ngOnInit() {
  }

}
