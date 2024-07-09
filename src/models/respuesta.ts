
import { Alumno } from "./alumno";

class Respuesta {

    constructor (public error: boolean,
                 public codigo: number,
                 public mensaje: string,
                 public data: Alumno[]
    ) {};

};

module.exports = Respuesta;