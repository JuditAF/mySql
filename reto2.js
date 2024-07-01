
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
        
        // let sql = "eliminar AS Updated_notes FROM marks WHERE mark>5 AND date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR)";
        // let [result] = await connection.query(sql);
        // console.log(result);                                   // Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado

        // let sql = "ALTER TABLE students ADD fecha_ingreso DATE";           // Insertar COLUMNA en tabla students
        // let [result] = await connection.query(sql);  
        // console.log(result);

        // let sql = "INSERT INTO students (fecha_ingreso)" +           
        //           "VALUES (('1996-09-20'), ('2020-04-06'), ('1998-06-08'), ('2024-02-02'), ('2024-09-17'), ('2024-03-03'), ('2015-10-25'), ('2010-11-05'), ('2024-01-10'), ('2002-12-03'))";
        // let [result] = await connection.query(sql);  
        // console.log(result);                                     // Insertar datos en nueva Columna fecha_ingreso
        
        let sql = "SELECT * AS students_thisYear FROM students WHERE fecha_ingreso BETWEEN “2024-01-30” AND “2024-12-31”";
        let [result] = await connection.query(sql);
        console.log(result);                                     // Obtén los datos de todos los estudiantes que estén en el bootcamp este año

    }
    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();