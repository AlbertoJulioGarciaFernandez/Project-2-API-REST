const router = require('express').Router()

const { getAllClassrooms, getOneClassroom, createClassroom, updateClassroom, deleteClassroom } = require('../controllers/classroom.controller.js')

router.get('/', getAllClassrooms)
router.get('/:id', getOneClassroom)
router.post('/', createClassroom)
router.put('/:id', updateClassroom)
router.delete('/:id', deleteClassroom)

module.exports = router

