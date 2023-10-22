const router = require('express').Router()

const { getAllClassroom_Equipments, getOneClassroom_Equipment, createClassroom_Equipment, updateClassroom_Equipment, deleteClassroom_Equipment } = require('../controllers/classroom_Equipment.controller')

router.get('/', getAllClassroom_Equipments)
router.get('/:id', getOneClassroom_Equipment)
router.post('/', createClassroom_Equipment)
router.put('/:id', updateClassroom_Equipment)
router.delete('/:id', deleteClassroom_Equipment)

module.exports = router
