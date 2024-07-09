class Alumno {

    public alumno: Alumno
    public alumnos: Alumno[]

    constructor(public id_student: number,
                public first_name: string,
                public last_name: string,
                public fecha_ingreso: number,
                public id_grupos: number = 0,
              ) { } //  public photo: string = " ",


};

module.exports = Alumno;