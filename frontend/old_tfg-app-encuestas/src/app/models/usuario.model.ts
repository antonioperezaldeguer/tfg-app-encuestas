export class Usuario {
    usuarioID: number;
    nombreUsuario: string;
    correo: string;
    contrasena: string;
    rol: string;
    creadoEn: Date;
    actualizadoEn: Date;

    constructor() {
        this.usuarioID = 0;
        this.nombreUsuario = '';
        this.correo = '';
        this.contrasena = '';
        this.rol = '';
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}