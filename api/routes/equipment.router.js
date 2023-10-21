const router = require('express').Router()

const { getAllEquipments, getOneEquipment, createEquipment, updateEquipment, deleteEquipment } = require('../controllers/equipment.controller.js')

router.get('/', getAllEquipments)
router.get('/:id', getOneEquipment)
router.post('/', createEquipment)
router.put('/:id', updateEquipment)
router.delete('/:id', deleteEquipment)

module.exports = router
