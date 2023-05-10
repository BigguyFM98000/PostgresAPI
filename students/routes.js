const {Router} = require('express');
const router = Router();
const studentsController = require('./controller');

router.get('/', studentsController.allStudents);
router.get('/:id', studentsController.oneStudentById);
router.post('/', studentsController.createStudent);
router.delete('/:id', studentsController.removeStudent);
router.put('/:id', studentsController.updateStudent);

module.exports = router;