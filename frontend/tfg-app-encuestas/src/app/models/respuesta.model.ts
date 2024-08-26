import { Pregunta } from './pregunta.model';

export class Respuesta {
    respuestaID: number;
    pregunta: Pregunta;
    respuestaTexto: string;

    constructor() {
        this.respuestaID = 0;
        this.pregunta = new Pregunta();
        this.respuestaTexto = '';
    }
}