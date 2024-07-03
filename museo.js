
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

        // let sql = "SELECT COUNT(m.id_student) AS numStudents, s.title, teachers.first_name, teachers.last_name FROM marks AS m " + 
        //           "INNER JOIN subjects AS s ON (m.id_subject = s.id_subjects)" +
        //           "INNER JOIN subject_teacher ON (s.id_subjects = subject_teacher.id_sub)" + 
        //           "INNER JOIN teachers ON (subject_teacher.id_teacher = teachers.id_teacher)" +  
        //           "GROUP BY s.id_subjects";
        // let [result] = await connection.query(sql)
        // console.log(result);                                //  Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte

    }

    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();