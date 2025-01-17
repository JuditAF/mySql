
const mysql = require("mysql2/promise");

async function main() {
    try {

        let connection = await mysql.createConnection({

            host: "localhost",
            user: "root",
            password: "JAFsql24",
            database: "museum"
        });

        console.log("Conexión correcta");

        //  Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, la fecha de expiración de este, 
        //  la información básica (nombre, apellidos y email) de la persona que los ha prestado.

        // let sql = "SELECT p.nombre, pr.fecha_devolucion, l.sala_expositor, l.sala_vitrina, l.almacen_armario, l.almacen_estanteria, d.nombre, d.apellidos, d.email FROM piezas AS p " + 
        //           "INNER JOIN localizacion AS l ON (p.id_localizacion = l.id_localizacion) " +
        //           "INNER JOIN prestamo AS pr ON (pr.id_prestamo = p.id_prestamo) " +
        //           "INNER JOIN dueño AS d ON (d.id_dueño = p.id_dueño) " +
        //           "WHERE NOT (p.id_prestamo =0) ORDER BY p.nombre"; 
          
        // let [result] = await connection.query(sql);
        // console.log(result);

         //  Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de la organización, esto es, 
         //  cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados.

        // let sql = "SELECT COUNT(c.id_coleccion) AS num_Piezas, c.estado FROM coleccion AS c " +    
        //           "INNER JOIN piezas AS p ON (c.id_coleccion = p.id_coleccion) " +
        //           "GROUP BY c.estado " +
        //           "ORDER BY num_Piezas DESC"; 
        // let [result] = await connection.query(sql);
        // console.log(result);

    }

    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------//

 // let sql = "SELECT COUNT(m.id_student) AS numStudents, s.title, teachers.first_name, teachers.last_name FROM marks AS m " + 
        //           "INNER JOIN subjects AS s ON (m.id_subject = s.id_subjects)" +
        //           "INNER JOIN subject_teacher ON (s.id_subjects = subject_teacher.id_sub)" + 
        //           "INNER JOIN teachers ON (subject_teacher.id_teacher = teachers.id_teacher)" +  
        //           "GROUP BY s.id_subjects";
        // let [result] = await connection.query(sql)
        // console.log(result);                                //  Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte

        // let sql = "ALTER TABLE piezas ADD año YEAR";           // Insertar COLUMNA en tabla students
        // let [result] = await connection.query(sql);
        // console.log(result);

        // let sql = "INSERT INTO piezas (nombre, año, autor, descripcion)" +
        //           "VALUES(\"Noche Estrellada\", 1889, \"Vincent Van Gogh\", \"La noche estrellada es una de las imágenes más conocidas del arte moderno\"), (\"Cotopaxi\", 1855, \"Edwin Church\", \"Erupciones generales\"), (\"Newton\", 1805, \"William Blake\", \"El arte es el árbol de la vida. La ciencia es el árbol de la muerte\"), (\"El nacimiento de Venus\", 1484, \"Sandro Botticelli\", \"La que se sostiene entre las olas\"), (\"Júpiter y Tetis\", 1811, \"Jean Auguste Dominique Ingres\", \"Una súplica por Aquiles.\"), (\"Paolo y Francesca de Rimini\", 1863, \"Gustave Doré\", \"Las pinturas de Doré nada tienen que envidiar a sus grabados\"), (\"Relatividad\", 1953, \"M.C. Escher\", \"El mundo como algo relativo\"), (\"La joven de la perla\", 1667, \"Johannes Vermeer\", \"La Mona Lisa holandesa\"), (\"El bufón Stańczyk\", 1862, \"Jan Matejko\", \"Un payaso pensativo\"), (\"La calumnia de Apeles\", 1495, \"Sandro Botticellia\", \"Una alegoría con mucho movimiento y simbolismo\")";
        // let [result] = await connection.query(sql);
        // console.log(result);

        //----------------------------------------------------------------------------------------------------------------------------------------------------------//