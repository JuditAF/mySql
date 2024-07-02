
const mysql = require("mysql2/promise");

async function main() {
    try {

        let connection = await mysql.createConnection({

            host: "localhost",
            user: "root",
            password: "JAFsql24",
            database: "address"
        });

        console.log("Conexión correcta");

             // let sql = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.id_student = marks.id_student)" +
        //     "JOIN subjects ON (marks.id_subject = subjects.id_subjects) ORDER BY students.first_name";
        // let [result] = await connection.query(sql)
        // console.log(result);                                // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados

        // let sql = "SELECT first_name, last_name, title FROM teachers JOIN subject_teacher ON (teachers.id_teacher = subject_teacher.id_teacher)" +
        //     "JOIN subjects ON (subjects.id_subjects = subject_teacher.id_subject) ORDER BY teachers.first_name";
        // let [result] = await connection.query(sql)
        // console.log(result);                                //  Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten

        let sql = "SELECT numStudents_XSubject, subjects.title, teachers.first_name, teachers.last_name, SUM(marks.id_student * marks.id_subject) AS numStudents_XSubject FROM marks)" +
                  "INNER JOIN subjects ON (marks.id_subject = subjects.id_subjects)" +
                  "JOIN subject_teacher ON (subjects.id_subjects = subject_teacher.id_subject)" + 
                  "JOIN teachers ON (subject_teacher.id_teacher = teachers.id_teacher) ORDER BY subjects.title";
        let [result] = await connection.query(sql)
        console.log(result);                                //  Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte

        // marks.id_student, marks.id_subject
    }

    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();