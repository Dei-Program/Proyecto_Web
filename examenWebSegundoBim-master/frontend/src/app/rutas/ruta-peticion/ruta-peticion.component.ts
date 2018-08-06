import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-peticion',
  templateUrl: './ruta-peticion.component.html',
  styleUrls: ['./ruta-peticion.component.css']
})
export class RutaPeticionComponent implements OnInit,DoCheck {

  constructor(private _httpClient:HttpClient,
              private _activatedRoute:ActivatedRoute,
              private _roter:Router) { }

  idUsuarioLogead=0;
  identificador;
  usuario;
  rangoAutos=4;
  botonAuto="Pedir Transferencia";
  botonCargar="Cargar más";
  autos=[];
  autosMostrados="autos - 4";

  cargarAutos(){
    if(this.rangoAutos<this.autos.length)
    this.rangoAutos+=4;

    this.autosMostrados="autos - "+this.rangoAutos;
  }

  pedirAuto(identificador){
    const url=['/home',this.idUsuarioLogead,'seleccion',identificador];
    this._roter.navigate(url);
  }

  ngOnInit() {
    this._activatedRoute.parent.params.subscribe((data)=>this.idUsuarioLogead=data['idUsuario']);

    const parametrosRuta$=this._activatedRoute.params;
    parametrosRuta$.subscribe((parametros)=>{
      this.identificador=parametros['identificadorB'];

      const consultarUsuario$= this._httpClient.post("http://localhost:3000/Usuario/obtener",
        {idUsuario:this.identificador});
      consultarUsuario$.subscribe((usuario:any)=>{
        this.usuario=usuario;

        const obtenerAutos$=this._httpClient.post("http://localhost:3000/Conductor/obtenerAutos",
          {identificador:this.usuario.conductores[0].id});

        obtenerAutos$.subscribe((conductorConAutos:any)=>{
          this.autos=conductorConAutos.autos;
        });
      });
    });
  }
  ngDoCheck(){
  }
}
