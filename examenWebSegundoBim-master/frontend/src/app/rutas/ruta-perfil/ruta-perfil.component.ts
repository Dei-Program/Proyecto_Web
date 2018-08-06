import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-perfil',
  templateUrl: './ruta-perfil.component.html',
  styleUrls: ['./ruta-perfil.component.css']
})
export class RutaPerfilComponent implements OnInit{

  identificador:string="0";
  peticiones=[];
  ofrecimientos=[];
  //parametrosRuta$ = this._activateRoute.params;
  nombreUsuario;

  constructor(private _httpClient:HttpClient,
              private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const recuperarIdUsuario= this._activateRoute.parent.params;
    recuperarIdUsuario.subscribe((parametros)=>{
      this.identificador=parametros['idUsuario'];

      const obtenerOfrecimientos=this._httpClient.post(
        "http://localhost:3000/Usuario/ofrecimientos",
        {identificador:this.identificador});

      obtenerOfrecimientos.subscribe((ofrecimientos:any)=>{this.ofrecimientos=ofrecimientos;
          console.log("identificador",this.identificador);
          console.log("ofreci",this.ofrecimientos);},
        (error)=>console.log(error));

      const obtenerPeticiones=this._httpClient.post(
        "http://localhost:3000/Usuario/solicitudes",
        {identificador:this.identificador});

      obtenerPeticiones.subscribe((peticiones:any)=> { this.peticiones=peticiones;
          console.log("identificador",this.identificador);
          console.log("peti",this.peticiones);},
        (error)=>console.log(error));

      const obtenerUsuario$ =
        this._httpClient.post("http://localhost:3000/Usuario/obtener",
          {idUsuario:this.identificador});

      obtenerUsuario$.subscribe((usuario:any)=>this.nombreUsuario=usuario.nick);

    });
  }
}
