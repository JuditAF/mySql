
// IMPORTACIÓN DE MÓDULOS
const express = require('express');
const cors = require('cors');
const alumnoRouters = require("./routers/alumno.routers");
const subjectRouters = require("./routers/subject.routers");
// const alumnoModel = require("./models/alumno");  
// const respuestaModel = require("./models/respuesta");      
const errorHandling = require ('./error/errorHandling');


// GENERAMOS EL OBJETO APP
const app = express();                                  


// DEFINICIÓN DEL PUERTO
app.set('port', process.env.PORT || 3000);  
    

// MIDDLEWARES
app.use(cors());                                        // CAPA DE SEGURIDAD

app.use(express.urlencoded({ extended : false }));      // ORIGEN EN FORMATO .JSON
app.use(express.json());                                // DESTINO EN FORMATO .JSON


app.use(alumnoRouters);                           // LLAMAMOS A NUESTRA API QUE SE ENCUENTRA EN LAS RUTAS DE LOS ENDPOINTS
// app.use(alumnoModel);
// app.use(respuestaModel);
app.use(subjectRouters);                                   


//  RECOGEMOS ERRORES
app.use(function(req, res, next) {                      // RECOGER EL ERROR DEL CLIENTE: "NO ENCONTRADO"

    res.status(404).json({ error: true,
                           codigo: 404,
                           message: "Endpoint doesn't found"}
                        )
});

app.use(errorHandling);                                 // ERROR DEL SERVIDOR


// EXPORTAMOS NUESTRA APP
module.exports = app;