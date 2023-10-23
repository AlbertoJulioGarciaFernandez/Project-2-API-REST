const { checkAuth } = require('../middleware/index.js');

const router = require('express').Router(),
    { getAllBuildings, getOneBuilding, createBuilding, updateBuilding, deleteBuilding } = require('../controllers/building.controller.js');

router.get('/', checkAuth, getAllBuildings);
router.get('/:id', getOneBuilding);
router.post('/', createBuilding);
router.put('/:id', updateBuilding);
router.delete('/:id', deleteBuilding);

module.exports = router;
