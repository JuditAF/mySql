
const fs = require('node:fs/promises');
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

         //------------------------------------------------------------------------------- PRUEBAS ---------------------------------------------------------------------------------------//

        // let sql = "CREATE TABLE marks (id_mark INT AUTO_INCREMENT PRIMARY KEY, " +
        //     "id_student INT," +
        //     "id_subject INT," +
        //     "date DATE ," +
        //     "mark INT(2))";

        // let [result] = await connection.query(sql);                 // Desestructuración

        // console.log("Tabla Creada");

        // console.log(result);

        // let sql = "ALTER TABLE marks DROP PRIMARY KEY";              // Dar de baja una primary Key
        // let [result] = await connection.query(sql); 
        // console.log(result);

        // let sql = "ALTER TABLE marks DROP COLUMN id_direccion";      // Eliminar una columna de una tabla
        // let [result] = await connection.query(sql); 
        // console.log(result);


        // let sql = "ALTER TABLE subject_teacher DROP FOREIGN KEY FK_groups";          // Eliminar una clave foránea
        // let [result] = await connection.query(sql); 
        // console.log(result);

        // let sql = "INSERT INTO students (first_name, last_name, id_group)" + 
        //             "VALUES(\"Rodrigo\",\"Castillo\", 9)";      
        // let [result] = await connection.query(sql); 
        // console.log(result);

        //----------------------------------------------------------------------------------------------------------------------------------------------------------------------//

        // let sql = "CREATE TABLE direccion (id_name INT AUTO_INCREMENT PRIMARY KEY, " + "name VARCHAR(84), " + " street VARCHAR(270), " + "number INT, " + "city VARCHAR(200), " + "country VARCHAR(84),  " + "CP INT(5))";
        // "VALUES(\"Rodrigo\",\"Castillo\", 9)";
        // let [result] = await connection.query(sql);
        // console.log(result);                                             // Crear tabla dirección

        // let sql = "INSERT INTO direccion (name, street, number, city, country, CP)" +             
        //           "VALUES(\"Hotel Mackays\",\"C/ Ebenezer Place\", 1, \"Wick Caithness\", \"Escocia\", null), (\"Banco Toronto\",\"C/ Yonge Street\", 205, \"Toronto Ontario\", \"Canada\", null), (\"World Famous Holiday Home\",\"C/ Baldwin Street\", 4, \"Dunedin Te Waipounamu\", \"Nueva Zelanda\", 9010), (\"590 Lombard St Apartaments\",\"C/  Lombard\", 590, \"San Francisco\", \"EEUU\", 94133), (\"Calle transitable más corta\",\"C/ Luzického Semináre\", null, \"Praga\", \"República Checa\", null), (\"Gibraltar International Airport\", \"Avda. Winston Churchill\", 11, \"Gibraltar\", \"Reino Unido\", 11300), (\"Mezquita Putra\",\"C/ Persiaran Persekutuan\", 11, \"Putrajaya\", \"Malasia\", 62502), (\"San Francisco el grande\",\"C/ Válgame Dios\", null, \"Madrid\", \"España\", 28004), (\"Alhana\",\"C/ La Alegría de la Huerta\", null, \"Villaverde\", \"España\", 28041), (\"Pepe Cañadas\",\"C/ Quinto pino\", 8, \"Almería\", \"España\", 04007)";
        // let [result] = await connection.query(sql);  
        // console.log(result);                                            // Insertar datos en tabla dirección

        // let sql = "ALTER TABLE direccion ADD barrio VARCHAR(84)";           // Insertar COLUMNA en tabla dirección
        // let [result] = await connection.query(sql);  
        // console.log(result); 

        // let sql = "ALTER TABLE direccion DROP COLUMN barrio";           // Eliminar COLUMNA en tabla dirección
        // let [result] = await connection.query(sql);  
        // console.log(result); 

        // let sql = "INSERT INTO students (first_name, last_name, id_group)" +             
        //           "VALUES(\"Rodrigo\",\"Castillo\", 9), (\"Ana\",\"Olmo\", 2), (\"Martin\",\"Márquez\", 7), (\"Guillermo\",\"Hadey\", 5), (\"Rodrigo\",\"Merino\", 6), (\"María\",\"Uribe\", 10), (\"Lucía\",\"Gracia\", 11), (\"Libertad\",\"Cruz\", 3), (\"Alhana\",\"Anderson\", 4), (\"Pepe\",\"Montilla\", 8)";
        // let [result] = await connection.query(sql);  
        // console.log(result);                                     // Crear tabla estudiantes


        // let sql = "DROP TABLE direccion";                                    // Elimina la tabla dirección de forma permanente
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "UPDATE marks SET mark=0";                                // Setear todas las notas de los alumnos a ‘0’
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "SELECT first_name, last_name FROM students";            // Obtener el nombre y el primer apellido de todos los estudiantes
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "SELECT * FROM teachers";            // Obtener todos los datos de los profesores
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "DELETE FROM marks WHERE date < DATE_SUB(CURDATE(), INTERVAL 10 YEAR)";            // Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "UPDATE marks SET mark=5 WHERE mark < 5";                  // Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los                                                                     
        // let [result] = await connection.query(sql);                          // profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5
        // console.log(result);

    }
    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();