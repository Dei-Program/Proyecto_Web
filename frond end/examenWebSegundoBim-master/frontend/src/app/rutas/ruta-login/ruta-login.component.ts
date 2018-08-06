import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {

  constructor(private httpCliente:HttpClient,
              private router:Router) { }

  ngOnInit() {
  }

  password;
  nick;
  url="http://192.168.1.1:3000/Autorizacion/iniciarSesion";
  idUsuario="1";

  crearUsuario(formulario) {
    console.log(formulario);
    const controles = formulario.controls;
    const passwordA = controles.password.value;
    const nickA = controles.nick.value;
    const iniciarSesion$ = this.httpCliente.post(this.url,
      {usuario:nickA,password:passwordA});

    iniciarSesion$.subscribe(
      (respuestaOk:any) => {
        console.log("salio bien");
        console.log(respuestaOk);
        this.idUsuario=respuestaOk.idUsuario;
        alert('Muy bien!');

      },
      (respuestaError) => {
        console.log(respuestaError);
        console.log("salio mal");
        this.password = undefined;
        this.nick= undefined;
        alert('Login incorrecto');
      },
      () => {
        console.log('Completado');
        const siguienteUrl=['/home',this.idUsuario,'busqueda'];
        //this.router.navigateByUrl('/busqueda');
        this.router.navigate(siguienteUrl);

      }
    );

  }

}
