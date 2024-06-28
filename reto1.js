
const fs = require('node:fs/promises');
const mysql = require("mysql2/promise");
const { table, error } = require('node:console');

async function main() {
    try {

        let connection = await mysql.createConnection({

            host: "localhost",
            user: "root",
            password: "JAFsql24",
            database: "address"
        });

        console.log("Conexión correcta");

        let sql = "CREATE TABLE marks (id_direccion INT AUTO_INCREMENT PRIMARY KEY, " +
            "id_mark INT, " +
            "id_student INT," +
            "id_subject INT," +
            "date DATE ," +
            "mark INT(2))";

        let [result] = await connection.query(sql);                 // Desestructuración

        console.log("Tabla Creada");

        console.log(result);

    }
    catch (error) {

        console.log(error);
        await connection.end();
    }
};

main();