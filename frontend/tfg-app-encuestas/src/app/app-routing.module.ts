import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal para la pantalla de inicio
  { path: 'acceso', component: LoginComponent },
  // Agrega aquí la ruta para el registro cuando crees el componente de registro
  { path: 'registro', component: RegisterComponent },
  { path: '**', redirectTo: '' } // Redirige cualquier ruta desconocida a la pantalla de inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }