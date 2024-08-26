import { Encuesta } from './encuesta.model';
import { Usuario } from './usuario.model';
import { Respuesta } from './respuesta.model';

export class RespuestaEncuesta {
    respuestaEncuestaID: number;
    encuesta: Encuesta;
    usuario: Usuario;
    enviadoEn: Date;
    respuestas: Respuesta[] = [];

    constructor() {
        this.respuestaEncuestaID = 0;
        this.encuesta = new Encuesta();
        this.usuario = new Usuario();
        this.enviadoEn = new Date();
    }
}