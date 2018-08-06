import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _httpClient: HttpClient,
              private _router:Router) { }

  idUsuario:string="0";
  parametrosRuta$ = this._activatedRoute.params;

  urlImg="/assets/imagenes/1.png";
  nombreUsuario="asadas";

  verPerfil(id){
    const url=['home',this.idUsuario,'perfil'];
    this._router.navigate(url);
  }


  ngOnInit() {
    this.parametrosRuta$
      .subscribe(
        (respuestaOk) => {
          this.idUsuario=respuestaOk['idUsuario'];

          const obtenerUsuario$ =
            this._httpClient.post("http://localhost:3000/Usuario/obtener",
              {idUsuario:this.idUsuario});

          obtenerUsuario$.subscribe((usuario:any)=>this.nombreUsuario=usuario.nick);
        },
        (respuestaError) => {
          console.log(respuestaError);
        }
      )


  }

}
