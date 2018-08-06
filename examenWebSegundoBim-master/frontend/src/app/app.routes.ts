import {Routes} from "@angular/router";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaPeticionComponent} from "./rutas/ruta-peticion/ruta-peticion.component";
import {RutaSeleccionComponent} from "./rutas/ruta-seleccion/ruta-seleccion.component";
import {RutaBuscadorComponent} from "./rutas/ruta-buscador/ruta-buscador.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";

export const ARREGLO_RUTAS: Routes = [
  {component:RutaLoginComponent,
    path:"login",
  },
  {component:RutaHomeComponent,
    path:"home/:idUsuario",
    children:[
      {component:RutaPerfilComponent,
        path:"perfil",
      },
      {component:RutaPeticionComponent,
        path:"peticion/:identificadorB",
      },
      {component:RutaSeleccionComponent,
        path:"seleccion/:identificadorC",
      },
      {component:RutaBuscadorComponent,
        path:"busqueda",
      },
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];
