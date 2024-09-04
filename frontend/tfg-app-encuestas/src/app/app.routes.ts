import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AccesoComponent } from './paginas/acceso/acceso.component';
import { CacontrasenaComponent } from './paginas/cacontrasena/cacontrasena.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { RecontrasenaComponent } from './paginas/recontrasena/recontrasena.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
    {path: "inicio",component: InicioComponent},
    {path: "",component: InicioComponent},
    {path: "acceso",component: AccesoComponent},
    {path: "cacontrasena",component: CacontrasenaComponent},
    {path: "encuesta",component: EncuestaComponent},
    {path: "perfil",component: PerfilComponent},
    {path: "recontrasena",component: RecontrasenaComponent},
    {path: "registro",component: RegistroComponent} 
];
//esto es lo nuevo

  //export class AppRoutingModule { }

  