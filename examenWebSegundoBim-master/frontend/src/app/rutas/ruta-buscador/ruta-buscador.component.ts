import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ruta-buscador',
  templateUrl: './ruta-buscador.component.html',
  styleUrls: ['./ruta-buscador.component.css']
})
export class RutaBuscadorComponent implements OnInit,DoCheck {

  constructor(private _httpClient: HttpClient,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) {}

  palabraBusqueda;
  buscarResultados(formulario){
    this.indiceAutos=0;
    this.indiceConductores=0;
    this.indiceUsuarios=0;
    const controles = formulario.controls;
    const  palabraBusqueda=controles.palabraBusqueda.value;

    const buscarUsuario$= this._httpClient.post('http://localhost:3000/Usuario/buscar',
      {palabraBusqueda:palabraBusqueda});

    buscarUsuario$.subscribe(
      (usuariosBuscados:any)=>{
        this.todosUsuarios=this.convertirUnidiminesionalABidimensional(usuariosBuscados,4);
      });

    const buscarConductores$= this._httpClient.post('http://localhost:3000/Conductor/buscar',
      {palabraBusqueda:palabraBusqueda});

    buscarConductores$.subscribe(
      (conductoresBuscados:any)=>{
        this.todosConductores=this.convertirUnidiminesionalABidimensional(conductoresBuscados,4);
      });

    const buscarAutos$= this._httpClient.post('http://localhost:3000/Auto/buscar',
      {palabraBusqueda:palabraBusqueda});

    buscarAutos$.subscribe(
      (autosBuscados:any)=>{
        this.todosAutos=this.convertirUnidiminesionalABidimensional(autosBuscados,4);
      });
  }

  idUsuario=1;
  todosUsuarios=[];
  botonUsuario="Visitar";
  indiceUsuarios=0;

  visitarPerfil(idVisitante){
    const url=['/home',this.idUsuario,'peticion',idVisitante];
    this._router.navigate(url);
  }

  solicitarAuto(idAuto){
    const url=['/home',this.idUsuario,'seleccion',idAuto];
    this._router.navigate(url);
  }

  todosConductores=[];
  indiceConductores=0;


  botonAuto="Pedir transferencia";
  todosAutos=[];
  indiceAutos=0;


  ngOnInit() {
    this._activatedRoute
      .parent.params
      .subscribe((data:any)=>this.idUsuario=data['idUsuario']);
  }

  ngDoCheck(){
  }

  convertirUnidiminesionalABidimensional(arregloUnidimensional,elementosDeCorte){
    const arregloBidimensional=[];
    let arregloAuxiliar=[];
    arregloUnidimensional.forEach((elemento,i)=>{
      arregloAuxiliar.push(elemento);
      if(i!=0&&(i+1)%elementosDeCorte==0||(i+1)==arregloUnidimensional.length){
        arregloBidimensional.push(arregloAuxiliar);
        arregloAuxiliar=[];
      }
    });
    console.log("Bidim",arregloBidimensional);
    return arregloBidimensional
  }

  mostrarMasUsuarios(){
    if(this.indiceUsuarios < this.todosUsuarios.length-1){
      this.indiceUsuarios++;
    }
  }

  mostrarMenosUsuarios(){
    if(this.indiceUsuarios>0){
      this.indiceUsuarios--;
    }
  }

  mostrarMasConductores(){
    if(this.indiceConductores < this.todosConductores.length-1){
      this.indiceConductores++;
    }
  }

  mostrarMenosConductores(){
    if(this.indiceConductores>0){
      this.indiceConductores--;
    }
  }
  mostrarMasAutos(){
    if(this.indiceAutos < this.todosAutos.length-1){
      this.indiceAutos++;
    }
  }

  mostrarMenosAutos(){
    if(this.indiceAutos>0){
      this.indiceAutos--;
    }
  }
}
