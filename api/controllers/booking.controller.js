const Booking = require('../models/booking.model.js')

async function getAllBookings(req, res) {
	try {
		const bookings = await Booking.findAll({ paranoid: false })
		if (bookings) {
			return res.status(200).json(bookings)
		} else {
			return res.status(404).send('No booking found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneBooking(req, res) {
	try {
		const booking = await Booking.findByPk(req.params.id)
		if (booking) {
			return res.status(200).json(booking)
		} else {
			return res.status(404).send('Booking not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createBooking(req, res) {
	console.log(req.body);
	try {
		const booking = await Booking.create(
			req.body
		)
		return res.status(200).json({ message: 'Booking created', booking: booking })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateBooking(req, res) {
	try {
		const [bookingExist, booking] = await Booking.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (bookingExist !== 0) {
			return res.status(200).json({ message: 'Booking updated', booking: booking })
		} else {
			return res.status(404).send('Booking not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteBooking(req, res) {
	try {
		const booking = await Booking.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (booking) {
			return res.status(200).json('Booking deleted')
		} else {
			return res.status(404).send('Booking not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllBookings,
	getOneBooking,
	createBooking,
	updateBooking,
	deleteBooking
}