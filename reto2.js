
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

        // let sql = "SELECT AVG(mark) AS subject1_media FROM marks WHERE id_subject=1";
        // let [result] = await connection.query(sql);
        // console.log(result);                                                // calcular la nota media de los alumnos de la asignatura 1

        // let sql = "SELECT COUNT(*) AS Num_students FROM students";
        // let [result] = await connection.query(sql);
        // console.log(result);                                             // Calcular el número total de alumnos que hay en el bootcamp

        // let sql = "SHOW COLUMNS FROM grupo";
        // let [result] = await connection.query(sql);
        // console.log(result);                                             // Listar todos los campos de la tabla “groups”

        // let sql = "SHOW FIELDS FROM grupo";
        // let [result] = await connection.query(sql);
        // console.log(result);                                             // Listar todos los campos de la tabla “groups”

        // let sql = "SELECT * FROM grupo";
        // let [result] = await connection.query(sql);
        // console.log(result);                                             // Listar todos los campos de la tabla “groups”

        // let sql = "DELETE FROM marks WHERE mark>5 AND date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR)";
        // let [result] = await connection.query(sql);
        // console.log(result);                                   // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado

        // let sql = "DELETE FROM marks WHERE mark>5 AND date < DATE_SUB(NOW(), INTERVAL 1 YEAR)";
        // let [result] = await connection.query(sql);
        // console.log(result);                                   // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado

        // let sql = "DELETE FROM marks ORDER BY mark>5 AND date < DATE_SUB(NOW(), INTERVAL 1 YEAR)";
        // let [result] = await connection.query(sql);
        // console.log(result);                                    // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado

        // let sql = "ALTER TABLE students ADD fecha_ingreso DATE";           // Insertar COLUMNA en tabla students
        // let [result] = await connection.query(sql);  
        // console.log(result);

        // let sql = "INSERT INTO students (fecha_ingreso)" +           
        //           "VALUES (('1996-09-20'), ('2020-04-06'), ('1998-06-08'), ('2024-02-02'), ('2024-09-17'), ('2024-03-03'), ('2015-10-25'), ('2010-11-05'), ('2024-01-10'), ('2002-12-03'))";
        // let [result] = await connection.query(sql);  
        // console.log(result);                                     // Insertar datos en nueva Columna fecha_ingreso

        // let sql = "SELECT id_student AS students_thisYear FROM students WHERE fecha_ingreso BETWEEN '2024-01-01' AND '2024-12-31'";
        // let [result] = await connection.query(sql);
        // console.log(result);                                     // Obtén los datos de todos los estudiantes que estén en el bootcamp este año

        //------------------------------------------------------ NO FUNCIONA --------------------------------------------------------------------------------------//

        // Obtén los datos de todos los estudiantes que estén en el bootcamp este año //

        // let sql = "SELECT (id_student) FROM students WHERE fecha_ingreso = year(curdate());";  
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "SELECT (id_student) FROM students WHERE fecha_ingreso LIKE '2024';";
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "SELECT (id_student) FROM students WHERE fecha_ingreso = YEAR(NOW());";
        // let [result] = await connection.query(sql);
        // console.log(result);

        //---------------------------------------------------------------------------------------------------------------------------------------------------------//

        // let sql = "SELECT id_subject, COUNT(DISTINCT id_teacher) AS teachers_forSubject FROM subject_teacher GROUP BY id_subject";
        // let [result] = await connection.query(sql);
        // console.log(result)                                         // Calcular el numero de profesores que hay por cada asignatura

        // let sql = "SELECT id_mark, mark FROM marks WHERE (id_mark > 0 AND id_mark < 21) OR (mark > 8 AND date < DATE_SUB(NOW(), INTERVAL 1 YEAR))";
        // let [result] = await connection.query(sql);
        // console.log(result); // Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado

        // let sql = "SELECT AVG(mark) AS subjectMedia_lastYear FROM marks WHERE YEAR(date) = YEAR(NOW())"
        // let [result] = await connection.query(sql);
        // console.log(result);                                     // Obtén la media de las notas que se han dado en el último año por asignatura

        // let sql = "SELECT AVG(mark) AS averageMarkStudent_lastYear FROM marks WHERE YEAR(date) = YEAR(NOW()) GROUP BY id_student"
        // let [result] = await connection.query(sql);
        // console.log(result);                                     // Obtén la media aritmética de las notas que se han dado en el último año por alumno

        // let sql = "SELECT id_student , AVG(mark) FROM marks WHERE YEAR(date) = YEAR(NOW()) GROUP BY id_student";
        // let [result] =await connection.query(sql)
        // console.log(result);                                     // Obtén la media aritmética de las notas que se han dado en el último año por alumno

    }
    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();

