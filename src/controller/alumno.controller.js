
const { pool } = require("../database");
// const alumno = require("../models/alumno");
// const respuesta = require('../models/respuesta');

let alumnos = [];

const getStart = async (request, response) => {
    try {
        if (request) {
            let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
            response.send(respuesta);}
    }
    catch (error) {
        response.send({error: true, codigo: 500, mensaje: error});                                                    // Json es un método conversor de formato
    }
};

const getAlumnos = async (request, response) => {
    try {

        let sql = 'SELECT * FROM students';
        console.log(sql);

        let [result] = await pool.query(sql);                                                                   // Destructuring  
                                                                 
        let respuesta = { error: false, codigo: 200, mensaje: "Alumnos almacenados", data: result }
        response.send(respuesta);
        // response.JSON(result);
      } catch (error) {
        response.send({error: true, codigo: 500, mensaje: error});
      }
    };

const getAlumnoParams = async (request, response) => {
    try {

        let sql;

        if (request.query.id_student == null) {
            sql = "SELECT * FROM students";

            // response.Json(sql);
            response.send({ error: true, codigo: 404, mensaje: "El Alumno no existe", data: JSON(sql) });
     
        } else {
            const id_student = request.params.id_student;
            sql = "SELECT * FROM students WHERE id_student=" + id_student;
            let [result] = await pool.query(sql);

            console.log(result);
            // response.JSON(result);
            let respuesta = { error: false, codigo: 200, mensaje: "Alumno encontrado", data: Json(result) };
            response.send(respuesta);
        }
    }
    catch (error) {
        response.status(500).Json({ error: error.message });
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
        // response.Json(result);

        if (result.insertId) {                                  // InertId es un método de sql

            response.send(String(result.insertId));             // uso "String" para para el id_student de Number a String
            respuesta = {
                error: false, codigo: 201,                      // 201: Código Objeto Creado
                mensaje: "Alumno añadido", data: Json(result)
            }
        } else {
            response.send(-1);
            respuesta = {
                error: true, codigo: 200,
                mensaje: "Alumno ya existente", data: result.insertId
            }
    }
        response.send(respuesta);
    } catch (error) {
        response.status(500).Json({ error: error.message });
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
        // response.send(result);

        if (result) {
            respuesta = {
                error: false, codigo: 200,
                mensaje: "Alumno Actualizado", data: JSON(result)
            }
        } else {
            respuesta = {
                error: true, codigo: 404,
                mensaje: "el Alumno no existe", data: getAlumnos()
            }
        }

        response.send(respuesta);

    } catch (error) {
        response.status(500).json({ error: error.message });
    };
};

const deleteAlumno = async (request, response) => {

    let id_student = request.params.id_student;

    try {

        console.log(request.body);

        let sql = "DELETE FROM students WHERE id_student = ?" + String(id_student);
        console.log(sql);

        let [result] = await pool.query(sql, [request.body.id_student]);
        // response.send(result);

        alumnos = getAlumnos();
        let newAlumnos = alumnos.filter(alumno => alumno.id_student != id_student);

    if (newAlumnos.length != alumnos.length) {

        alumnos = newAlumnos;

        respuesta = {
            error: false, codigo: 200,
            mensaje: "Alumno eliminado", data: Json(alumnos)
        }
    } else {
        respuesta = {
            error: true, codigo: 404,
            mensaje: "el Alumno no existe", data: Json(alumnos)
        }
    }
    response.send(respuesta);
    } catch (error) {
        response.status(500).json({ error: error.message });
    };
};


module.exports = { getStart, getAlumnos, getAlumnoParams, postAlumno, putAlumno, deleteAlumno };