import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../lib/pages/inicio/inicio.component';
import { AccesoComponent } from '../lib/pages/acceso/acceso.component';
import { RegistroComponent } from '../lib/pages/registro/registro.component';
import { PerfilComponent } from '../lib/pages/perfil/perfil.component';
import { RecuperacontrasenaComponent } from '../lib/pages/recuperacontrasena/recuperacontrasena.component';
import { CambiacontrasenaComponent } from '../lib/pages/cambiacontrasena/cambiacontrasena.component';
import { EncuestaComponent } from '../lib/pages/encuesta/encuesta.component';

const routes: Routes = [
  { path: 'inicio', 
    component: InicioComponent },
  { path: '', 
      component: InicioComponent },
  { path: 'acceso',
    component: AccesoComponent },
  { path: 'registro',
    component: RegistroComponent },
  { path: 'perfil', 
    component: PerfilComponent },
  { path: 'recontrasena', 
    component:  },
  { path: 'cacontrasena', 
    component: CambiacontrasenaComponent },
  { path: 'encuesta', 
    component: EncuestaComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}