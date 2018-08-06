import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConductorComponent } from './componentes/conductor/conductor.component';
import { AutoComponent } from './componentes/auto/auto.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaBuscadorComponent } from './rutas/ruta-buscador/ruta-buscador.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaPeticionComponent } from './rutas/ruta-peticion/ruta-peticion.component';
import { RutaSeleccionComponent } from './rutas/ruta-seleccion/ruta-seleccion.component';
import {RouterModule} from "@angular/router";
import {ARREGLO_RUTAS} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { PeticionComponent } from './componentes/peticion/peticion.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { OfrecimientoComponent } from './componentes/ofrecimiento/ofrecimiento.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {ConsultaService} from "./consulta.service";

@NgModule({
  declarations: [
    AppComponent,
    ConductorComponent,
    AutoComponent,
    UsuarioComponent,
    RutaLoginComponent,
    RutaBuscadorComponent,
    RutaPerfilComponent,
    RutaPeticionComponent,
    RutaSeleccionComponent,
    PeticionComponent,
    BotonComponent,
    OfrecimientoComponent,
    RutaHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ARREGLO_RUTAS,
      {
        useHash: true,
      }
    ),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
