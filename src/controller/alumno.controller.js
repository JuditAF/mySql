
const { pool } = require("../database");
const alumno = require("../models/alumno");
const Alumno = require('../models/alumno');

let alumnos = [];

function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
};

const getAlumnoParams = async (request, response) => {
    try {
        let sql;
        if (request.query.id_student == null) 
            sql = "SELECT * FROM students"
        
        //     const id_student = request.params.id_student;
        // const alumno = alumnos.find(alumno => alumno.id_student === id_student);
        // if (alumno != null && id_student === alumno.id_student) {
        //     let respuesta = { error: false, codigo: 200, mensaje: "Alumno encontrado", data: [alumno] }
        //     response.send(respuesta);
        else 
            sql = "SELECT * FROM students WHERE id_student=" + request.query.id_student;
            let [result] = await pool.query(sql);
            response.send(result);
            // response.send({ error: true, codigo: 404, mensaje: "El Alumno no existe" })
    
    }
    catch (error) {
        console.log(error);
    }
};

const getAlumno = async (request, response) => {
    try {
        let sql;
        if (request.query.id_student != null)
            if (alumnos != null) {
                let respuesta = { error: false, codigo: 200, mensaje: "Alumnos almacenados", data: alumnos }
                response.json(respuesta);
            } else {
                response.send({ error: true, codigo: 200, mensaje: "La lista de Alumnos está vacía" })
            }
    }
    catch (error) {
        console.log(error);
    }
};


function postAlumno(request, response) {

    console.log(request.body);

    let { id_student, first_name, last_name, fecha_ingreso, id_grupos } = request.body;
    let newAlumno = new Alumno(id_student, first_name, last_name, fecha_ingreso, id_grupos);

    if (newAlumno !== null) {

        alumnos.push(newAlumno);
        respuesta = {
            error: false, codigo: 201,                      // 201: Código Objeto Creado
            mensaje: "Alumno añadido", data: newAlumno
        }
    } else {
        respuesta = {
            error: true, codigo: 200,
            mensaje: "Alumno ya existente", data: newAlumno
        }
    }
    response.send(respuesta);
};


function putAlumno(request, response) {

    let { id_student, first_name, last_name, fecha_ingreso, id_grupos } = request.body;
    let i = alumnos.findIndex(alumno => alumno.id_student == id_student);

    if (i !== -1) {
        alumnos[i].id_student = id_student;
        alumnos[i].first_name = first_name;
        alumnos[i].last_name = last_name;
        alumnos[i].fecha_ingreso = fecha_ingreso;
        alumnos[i].id_grupos = id_grupos;

        respuesta = {
            error: false, codigo: 200,
            mensaje: "Alumno Actualizado", data: books[i]
        }
    } else {
        respuesta = {
            error: true, codigo: 404,
            mensaje: "el Alumno no existe", data: book
        }
    }

    response.send(respuesta);
};


function deleteAlumno(request, response) {

    let id_student = request.params.id_student;
    let newAlumnos = alumnos.filter(alumno => alumno.id_student != id_student);
    console.log(id_student);
    console.log(newAlumnos);
    let respuesta;

    if (newAlumnos.length != alumnos.length) {

        alumnos = newAlumnos;

        respuesta = {
            error: false, codigo: 200,
            mensaje: "Libro eliminado", data: alumnos
        }
    } else {
        respuesta = {
            error: true, codigo: 404,
            mensaje: "el Libro no existe", data: alumno
        }
    }
    response.send(respuesta);
};


module.exports = { getStart, getAlumno, getAlumnoParams, postAlumno, putAlumno, deleteAlumno };