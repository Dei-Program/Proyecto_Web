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

  @Input()
  identificador:number;

  ngOnInit() {
  }

  visitarPerfil(identificador){
    const url = [
      '/busqueda'
    ];
    this._router.navigate(url);

    console.log("navegamos");
  }

}
