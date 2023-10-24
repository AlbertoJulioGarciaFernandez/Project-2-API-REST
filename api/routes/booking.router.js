const router = require('express').Router()

const { getOneBooking, getAllBookings, createBooking, updateBooking, deleteBooking } = require('../controllers/booking.controller')
const { checkAuth, checkAdmin } = require('../middleware')

router.get('/', getAllBookings)
router.get('/:id', getOneBooking)
router.post('/', checkAuth, createBooking)
router.post('/:id', checkAuth, checkAdmin, createBooking)
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking)

module.exports = router