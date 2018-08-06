import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css']
})
export class PeticionComponent implements OnInit {

  @Input()
  identificador;

  peticion;
  autoSolicitado;
  autoOfrecido;
  usuarioSolicita;
  usuarioOfrece;

  constructor(private _httpClient:HttpClient) { }

  ngOnInit() {
    const cargarPeticion$=this._httpClient.post(
      'http://localhost:3000/Peticion/obtener',
      {identificador:this.identificador}
    );

    cargarPeticion$.subscribe(
      (peticion:any)=>{
        this.peticion=peticion;
        this.autoSolicitado=peticion.autoSolicitado;
        this.autoOfrecido=peticion.autoOfrecido;
        this.usuarioSolicita=peticion.usuarioSolicita;
        this.usuarioOfrece=peticion.usuarioOfrece;
        console.log("soli",this.autoSolicitado);
        console.log("ofre",this.autoOfrecido);
      });
  }

}
