import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  correo: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.iniciarSesion(this.correo, this.contrasena).subscribe(
      (usuario) => {
        localStorage.setItem('token', usuario.token); // API devuelve un token JWT
        this.router.navigate(['/dashboard']); // Cambia '/dashboard' a la ruta adecuada
      },
      (error) => {
        alert('Error al iniciar sesión');
      }
    );
  }
}