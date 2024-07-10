
const { pool } = require("../database");
// const alumno = require("../models/alumno");
// const respuesta = require('../models/respuesta');

const getStart = async (request, response) => {
    try {
        if (request) {
            let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
            response.send(respuesta);
        }
    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });                                                    // Json es un método conversor de formato
    }
};

const getAlumnos = async (request, response) => {
    try {

        let sql = 'SELECT * FROM students';
        console.log(sql);

        let [result] = await pool.query(sql);                                                                   // Destructuring  

        let respuesta = { error: false, codigo: 200, mensaje: "Alumnos almacenados", data: result }
        response.send(respuesta);

    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const getAlumnoParams = async (request, response) => {
    try {

        let sql;

        const id_student = request.params.id_student;
        sql = "SELECT * FROM students WHERE id_student=" + id_student;

        let [result] = await pool.query(sql);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: "Alumno encontrado", data: result };
        response.send(respuesta);

    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const postAlumno = async (request, response) => {
    try {
        console.log(request.body);

        let sql = "INSERT INTO students (first_name, last_name, fecha_ingreso, id_grupos) " +
            "VALUES ('" + request.body.first_name + "', '" +
            request.body.last_name + "', '" +
            request.body.fecha_ingreso + "', '" +
            request.body.id_grupos + "')";
        console.log(sql);

        let [result] = await pool.query(sql);
        console.log(result);

        if (result.insertId) {                                  // InertId es un método de sql

            response.send(String(result.insertId));             // uso "String" para para el id_student de Number a String
            respuesta = {
                error: false, codigo: 201,                      // 201: Código Objeto Creado
                mensaje: "Alumno añadido", data: result
            }
        } else {
            response.send(-1);
            respuesta = {
                error: true, codigo: 200,
                mensaje: "Alumno ya existente", data: String(result.insertId)
            }
        }
        response.send(respuesta);
    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    };
};

const putAlumno = async (request, response) => {
    try {

        console.log(request.body);

        let params = [request.body.first_name,
        request.body.last_name,
        request.body.fecha_ingreso,
        request.body.id_grupos,
        request.body.id_student];

        let sql = "UPDATE students SET first_name = COALESCE(?, first_name), " +
            "last_name = COALESCE(?, last_name), " +
            "fecha_ingreso = COALESCE(?, fecha_ingreso), " +
            "id_grupos = COALESCE(?, id_grupos) WHERE id_student = ?";

        console.log(sql);

        let [result] = await pool.query(sql, params);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: "Alumno Actualizado", data: result }
        console.log(respuesta);

        response.send(respuesta);

    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    };
};

const deleteAlumno = async (request, response) => {

    try {

        console.log(request.body);

        let sql = "DELETE FROM students WHERE id_student = ?" + id_student;
        console.log(sql);

        let [result] = await pool.query(sql, [request.body.id_student]);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: "Alumno Eliminado", data: result }
        response.send(respuesta);

    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    };
};


module.exports = { getStart, getAlumnos, getAlumnoParams, postAlumno, putAlumno, deleteAlumno };