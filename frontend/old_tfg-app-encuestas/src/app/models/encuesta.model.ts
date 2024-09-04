import { Usuario } from './usuario.model';
import { Pregunta } from './pregunta.model';

export class Encuesta {
    encuestaID: number;
    usuario: Usuario;
    titulo: string;
    descripcion: string;
    esPublica: boolean;
    creadoEn: Date;
    actualizadoEn: Date;
    preguntas: Pregunta[] = [];

    constructor() {
        this.encuestaID = 0;
        this.usuario = new Usuario();
        this.titulo = '';
        this.descripcion = '';
        this.esPublica = false;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}