import { Encuesta } from './encuesta.model';

export class Pregunta {
    preguntaID: number;
    encuesta: Encuesta;
    texto: string;
    esObligatoria: boolean;
    creadoEn: Date;
    actualizadoEn: Date;

    constructor() {
        this.preguntaID = 0;
        this.encuesta = new Encuesta();
        this.texto = '';
        this.esObligatoria = false;
        this.creadoEn = new Date();
        this.actualizadoEn = new Date();
    }
}
