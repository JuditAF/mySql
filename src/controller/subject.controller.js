
const { pool } = require("../../database");


let asignaturas = [];


const getNotaParams = async (request, response) => {
   
    try {

        let sql;

        if (request.params.id_student == null) {
            sql = "SELECT * FROM students";
            
            // response.Json(sql);
            response.send({ error: true, codigo: 404, mensaje: "El Alumno no existe o no se ha examinado aún", data: JSON(sql) });
     
        } else {

            const id_student = request.params.id_student;
            sql = `SELECT AVG(mark) AS notaMedia FROM marks WHERE id_student = ?`;

            let [result] = await pool.query(sql, [id_student]);
            console.log(result);
            
            // response.JSON(result);
            let respuesta = { error: false, codigo: 200, mensaje: ("Nota media del Alumno con id " + id_student), data: Json(result) };
            response.send(respuesta);
        }
        // response.Json({ notaMedia: result[0].notaMedia });
    }
    catch (error) {
        response.status(500).Json({ error: error.message });
    }
};


const getAsignaturasAlumnos = async (request, response) => {

    try {

        let sql = `SELECT s.first_name, s.last_name, sb.title FROM students AS s
                   JOIN marks AS m ON m.id_student = s.id_student
                   JOIN subjects AS sb ON m.id_subject = sb.id_subjects
                   ORDER BY s.id_student`;
        console.log(sql);

        let [result] = await pool.query(sql);                                                                   // Destructuring  
                                                                   
        let respuesta = { error: false, codigo: 200, mensaje: "Las Asignaturas a las que se han apuntado los Alumnos", data: Json(result) }
        response.send(respuesta);
        // response.JSON(result);
      } catch (error) {
        response.status(500).Json({ error: error.message });
      }
    };

const getAsignaturaParams = async (request, response) => {

    try {

        let sql;

        if (request.query.id_student == null) {
            sql = `SELECT s.first_name, s.last_name, sb.title FROM students AS s
                   JOIN marks AS m ON m.id_student = s.id_student
                   JOIN subjects AS sb ON m.id_subject = sb.id_subjects
                   ORDER BY s.id_student`;

            let [result] = await pool.query(sql); 

            // response.Json(sql);
            response.send({ error: true, codigo: 404, mensaje: "El Alumno no existe o no se ha inscrito en ninguna", data: Json(result) });
     
        } else {
            const id_student = request.params.id_student;

            sql = `SELECT s.first_name, s.last_name, sb.title FROM students AS s
                   JOIN marks AS m ON m.id_student = s.id_student
                   JOIN subjects AS sb ON m.id_subject = sb.id_subjects
                   WHERE m.id_student = ?
                   ORDER BY s.id_student`;
            console.log(sql);

            let [result] = await pool.query(sql, [id_student]);
            console.log(result);

            // response.JSON(result);
            let respuesta = { error: false, codigo: 200, mensaje: "Alumno inscrito en las siguientes Asignaturas", data: Json(result) };
            response.send(respuesta);
        }
    }
    catch (error) {
        response.status(500).Json({ error: error.message });
    }
};


const getAsignaturasProfesores = async (request, response) => {
    try {

        let sql = '';
        console.log(sql);

        let [result] = await pool.query(sql);                                                                   // Destructuring  
                                                                   
        let respuesta = { error: false, codigo: 200, mensaje: "", data: Json(result) }
        response.send(respuesta);
        // response.JSON(result);
      } catch (error) {
        response.status(500).Json({ error: error.message });
      }
    };

const getAsignaturasProfesor = async (request, response) => {
    try {
    
        let sql;
    
        if (request.query.id_student == null) {
            sql = "";
    
            // response.Json(sql);
            response.send({ error: true, codigo: 404, mensaje: "", data: JSON(sql) });
         
        } else {
            const id_student = request.params.id_student;
            sql = "" 
            let [result] = await pool.query(sql);
    
            console.log(result);
            // response.JSON(result);
            let respuesta = { error: false, codigo: 200, mensaje: "", data: Json(result) };
            response.send(respuesta);
        }
    }
    catch (error) {
        response.status(500).Json({ error: error.message });
    }
};


module.exports = { getAsignaturasAlumnos, getNotaParams, getAsignaturaParams, getAsignaturasProfesores, getAsignaturasProfesor };