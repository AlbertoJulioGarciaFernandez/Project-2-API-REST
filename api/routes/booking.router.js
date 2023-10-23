const router = require('express').Router()

const { getOneBooking, getAllBookings, createBooking, updateBooking, deleteBooking } = require('../controllers/booking.controller')
const { checkAuth } = require('../middleware')

router.get('/', getAllBookings)
router.get('/:id', getOneBooking)
router.post('/', checkAuth, createBooking)
router.put('/:id', updateBooking)
router.delete('/:id', deleteBooking)

module.exports = router