const Booking = require('../models/booking.model.js')
const Building = require('../models/building.model.js')
const Classroom = require('../models/classroom.model.js')
const User = require('../models/user.model.js')

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
	try {
		const date = req.body.bookingDate,
			time = req.body.bookingTime,
			idClassroom = req.body.classroomId,
			email = req.body.email,
			bookingQuery = await Booking.findOne({
				where: {
					bookingDate: date,
					bookingTime: time,
					classroomId: idClassroom
				}
			});

		if (bookingQuery === null) {

			const user = await User.findByPk(res.locals.user.id)
			const classroomQuery = await Classroom.findOne({
				where: {
					id: idClassroom
				}
			});
			console.log(user, classroomQuery)
			if (!classroomQuery) { res.status(405).send("no esxiste ese aula") }

			if (classroomQuery.aimedAt === res.locals.user.role) {
				/* const booking = await Booking.create(
					req.body
				)
				const [updateBooking] = await Booking.update(idUser, {
					where: {
						id: booking.dataValues.id
					}
				}) */
				req.body.userId = res.locals.user.id
				const newBooking = await Booking.create(req.body)

				return res.status(200).json({ message: 'Booking created', booking: newBooking })


			} else {
				return res.status(400).send('Booking cannot be created because your role is different')
			}


		} else {
			return res.status(400).send('Booking cannot be created')
		}


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