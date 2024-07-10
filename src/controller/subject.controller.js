
const { pool } = require("../database");


let asignaturas = [];


const getNotaParams = async (request, response) => {

    try {

        const id_student = request.params.id_student;

        let sql = `SELECT AVG(mark) AS notaMedia FROM marks WHERE id_student = ?`;
        console.log(sql);

        let [result] = await pool.query(sql, [id_student]);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: ("Nota media del Alumno con id " + id_student), data: result };
        response.send(respuesta);

        // response.Json({ notaMedia: result[0].notaMedia });
    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};


const getAsignaturasAlumnos = async (request, response) => {

    try {

        let sql = "SELECT s.first_name, s.last_name, sb.title FROM students AS s " +
                  "INNER JOIN marks AS m ON (s.id_student = m.id_student) " +
                  "INNER JOIN subjects AS sb ON (m.id_subject = sb.id_subjects) " +
                  "ORDER BY s.id_student";
        console.log(sql);

        let [result] = await pool.query(sql);
        console.log(result);                                                                // Destructuring  

        let respuesta = { error: false, codigo: 200, mensaje: "Las Asignaturas a las que se han apuntado los Alumnos", data: result }
        response.send(respuesta);

    } catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const getAsignaturaParams = async (request, response) => {

    try {
        const id_student = request.params.id_student;

        sql = "SELECT s.first_name, s.last_name, sb.title FROM students AS s " +
              "INNER JOIN marks AS m ON m.id_student = s.id_student " +
              "INNER JOIN subjects AS sb ON m.id_subject = sb.id_subjects " +
              "WHERE m.id_student = ? " +
              "ORDER BY s.id_student";
        console.log(sql);

        let [result] = await pool.query(sql, [id_student]);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: "Alumno inscrito en las siguientes Asignaturas", data: result };
        response.send(respuesta);
    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};


const getAsignaturasProfesores = async (request, response) => {
    try {

        let sql = "SELECT t.first_name, t.last_name, sb.title FROM teachers AS t " +
            "INNER JOIN subject_teacher AS st ON st.id_teacher = t.id_teacher " +
            "INNER JOIN subjects AS sb ON st.id_subject = sb.id_subjects " +
            "ORDER BY t.id_teacher";
        console.log(sql);

        let [result] = await pool.query(sql); 
        console.log(result);                                                                  // Destructuring  

        let respuesta = { error: false, codigo: 200, mensaje: "Los profesores imparten las siguientes asignaturas", data: result }
        response.send(respuesta);
    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};

const getAsignaturasProfesor = async (request, response) => {
    try {
        const id_teacher = request.params.id_teacher;

        let sql = "SELECT t.first_name, t.last_name, sb.title FROM teachers AS t " +
                  "INNER JOIN subject_teacher AS st ON st.id_teacher = t.id_teacher " +
                  "INNER JOIN subjects AS sb ON st.id_subject = sb.id_subjects " +
                  "WHERE t.id_teacher = ? " +
                  "ORDER BY t.id_teacher"
        console.log(sql);

        let [result] = await pool.query(sql, [id_teacher]);
        console.log(result);

        let respuesta = { error: false, codigo: 200, mensaje: ("Asignaturas impartidas por el profesor con id " + [id_teacher]), data: result };
        response.send(respuesta);
    }
    catch (error) {
        response.send({ error: true, codigo: 500, mensaje: error });
    }
};


module.exports = { getAsignaturasAlumnos, getNotaParams, getAsignaturaParams, getAsignaturasProfesores, getAsignaturasProfesor };