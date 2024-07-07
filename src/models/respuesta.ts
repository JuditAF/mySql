
import { Alumno } from "./alumno";

export class Respuesta {

    constructor (public error: boolean,
                 public codigo: number,
                 public mensaje: string,
                 public data: Alumno[]
    ) {};

};