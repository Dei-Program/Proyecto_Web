import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-seleccion',
  templateUrl: './ruta-seleccion.component.html',
  styleUrls: ['./ruta-seleccion.component.css']
})
export class RutaSeleccionComponent implements OnInit {

  constructor(private _activatedRouter:ActivatedRoute,
              private _httpClient:HttpClient,
              private _router:Router) { }

  identificador=0;
  idAutoPedido=0;
  autoPedido;
  usuario;
  rangoAutos=4;
  botonAuto="Seleccionar Transferencia";
  botonCargar="Cargar más";
  autos=[];
  autosMostrados="autos - 4";
  idPoseedor;
  solicitadorIgualPoseedor;

  cargarAutos(){
    if(this.rangoAutos<this.autos.length)
      this.rangoAutos+=4;

    this.autosMostrados="autos - "+this.rangoAutos;
  }

  realizarTransferencia(idAutoOfrecido){
    this.solicitadorIgualPoseedor=this.idPoseedor==this.identificador;

    if(this.solicitadorIgualPoseedor){

    }else{
      const crearTransferencia = this._httpClient.post("http://localhost:3000/Peticion/crear",
        {idAutoOfrecido:idAutoOfrecido,
          idAutoSolicitado:this.idAutoPedido,
          idPoseedor:this.idPoseedor,
          idOfrece:this.identificador});
      crearTransferencia.subscribe((resultadoOk)=>console.log(resultadoOk));
      console.log("transferencia creada");

      const url=['/home',this.identificador,'perfil'];
      this._router.navigate(url);
    }

  }

  ngOnInit() {
    const recuperarAutoPedido= this._activatedRouter.params;
    recuperarAutoPedido.subscribe((parametros)=>{
      this.idAutoPedido=parametros['identificadorC'];
      console.log("idAutoPedido",this.idAutoPedido);

      const consultarPoseedor$= this._httpClient.post("http://localhost:3000/Usuario/obtenerPorAuto",
        {idAuto:this.idAutoPedido});
      consultarPoseedor$.subscribe((resultado:any)=>this.idPoseedor=resultado.idUsuario);

      const consultarAutoPedido=this._httpClient.get("http://localhost:3000/Auto/obtenerPorIdAuto/"+this.idAutoPedido);
      consultarAutoPedido.subscribe((auto)=>this.autoPedido=auto);
    });

    const recuperarIdUsuario= this._activatedRouter.parent.params;
    recuperarIdUsuario.subscribe((parametros)=>{
      this.identificador=parametros['idUsuario'];

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
}

