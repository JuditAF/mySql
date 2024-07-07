
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const alumnoCtrl = require ('../controller/alumno.controller');


router.get('/', alumnoCtrl.getStart);
router.get('/alumnos', alumnoCtrl.getAlumno);
router.get('/alumnos/:id_student', alumnoCtrl.getAlumnoParams);


router.post('/alumnos', alumnoCtrl.postAlumno);
router.put('/alumnos', alumnoCtrl.putAlumno);
router.delete('/alumnos', alumnoCtrl.deleteAlumno);


module.exports = router;