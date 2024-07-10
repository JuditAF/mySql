
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const subjectCtrl = require ('../controller/subject.controller');


router.get('/media/:id_student', subjectCtrl.getNotaParams);


router.get('/apuntadas', subjectCtrl.getAsignaturasAlumnos);
router.get('/apuntadas/:id_student', subjectCtrl.getAsignaturaParams);


router.post('/impartidas', subjectCtrl.getAsignaturasProfesores);
router.put('/impartidas/:id_teacher', subjectCtrl.getAsignaturasProfesor);


module.exports = router;