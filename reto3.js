
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

        let sql = "SELECT first_name, last_name, title FROM students JOIN marks ON (students.id_student = marks.id_student)" +
            "JOIN subjects ON (marks.id_subject = subjects.id_subjects) ORDER BY students.first_name";
        let [result] = await connection.query(sql)
        console.log(result);                                // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados

    }

    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();