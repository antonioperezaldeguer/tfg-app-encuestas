import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
  nombreUsuario: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrarUsuario() {
    const nuevoUsuario = {
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
      contrasena: this.contrasena
    };

    this.authService.registrarUsuario(nuevoUsuario).subscribe(
      () => {
        alert('Usuario registrado exitosamente');
        this.router.navigate(['/acceso']);
      },
      (error) => {
        alert('Error al registrar el usuario');
        console.error(error);
      }
    );
  }
}
