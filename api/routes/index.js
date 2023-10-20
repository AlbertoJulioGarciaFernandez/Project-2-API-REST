const router = require('express').Router();

router.use('/actor', require('./actor.router.js'));
router.use('/address', require('./address.router.js'));
router.use('/country', require('./country.router.js'));
router.use('/movie', require('./movie.router.js'));
router.use('/user', require('./user.router.js'));

module.exports = router;
