
const fs = require('node:fs/promises');
const mysql = require ("mysql2/promise");
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
    }
    catch(error) {

        console.log(error);
        await connection.end();
    }
};

main();