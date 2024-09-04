/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
/*
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  iniciarSesion(correo: string, contrasena: string): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}/auth/login`, { correo, contrasena });
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}/auth/register`, usuario);
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }
}
  */
login (loginModel:LoginModel){
    
  this.httpClient.post <string>(`${this.URL}/login`,loginModel).subscribe(receivedItem => {
    
    localStorage.setItem('access_token',JSON.stringify(receivedItem));

    this.goAdminPage();
          
  },err => {
          this.msg$.next(err.error);         
    }
  )
}

goAdminPage(){
  this.router.navigate(['/admin']);
}

register(user:UserModel){

  return this.httpClient.post(`${this.URL}/register`,user,{observe: 'response', responseType: 'json'});

}


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }