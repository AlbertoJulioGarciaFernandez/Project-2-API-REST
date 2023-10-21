const router = require('express').Router();

// router.use('/booking', require('./booking.router.js'));
// router.use('/building', require('./building.router.js'));
// router.use('/classroom', require('./classroom.router.js'));
// router.use('/equipment', require('./equipment.router.js'));
router.use('/user', require('./user.router.js'));

module.exports = router;
