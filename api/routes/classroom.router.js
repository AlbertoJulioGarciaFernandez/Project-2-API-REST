const router = require('express').Router(),
    { } = require('../controllers/country.controller.js');

// Basic CRUD
router.get('/', getAllCountrie);
router.get('/:id', getOneCountry);
router.post('/', createCountry);
router.put('/:id', updateCountry);
router.delete('/:id', deleteCountry);

module.exports = router;

