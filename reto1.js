
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

        let sql = "CREATE TABLE direccion2 (id_direccion INT AUTO_INCREMENT PRIMARY KEY, " +
            "calle VARCHAR(45), " +
            "numero INT(3) ," +
            "portal INT(2) ," +
            "escalera VARCHAR(10) ," +
            "piso INT(3) ," +
            "puerta INT(2) ," +
            "barrio VARCHAR(85) ," +
            "localidad VARCHAR(84) ," +
            "municipio VARCHAR(93) ," +
            "país VARCHAR(56) ," +
            "código postal INT(5))";

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