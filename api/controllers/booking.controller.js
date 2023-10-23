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
			bookingExists = await Booking.findOne({
				where: {
					bookingDate: date,
					bookingTime: time,
					classroomId: idClassroom
				}
			});

		// Checking whether another user has booked the classroom
		// at the same time and hour we want it to book it:
		if (bookingExists === null) {
			// Now, it is time to check if the id provided for 
			// the classroom belongs to an actual classroom in the
			// database:
			const classroomExists = await Classroom.findOne({
				where: {
					id: idClassroom
				}
			});

			if (!classroomExists) { res.status(404).send('Classroom not found.') }

			// In case the id exists, we check whether that classroom
			// is aimed at users with the role of the current logged in user.
			// Note that we use the «res.locals.user» variable, previously 
			// retrieved in the checkAuth() function:
			if (classroomExists.aimedAt === res.locals.user.role) {
				// If his/her role matches the classroom's, his/her «id» will be
				// stored in a new key (userId) in the body request, which we will
				// be passsing on to the Booking.create() function, as shown:
				req.body.userId = res.locals.user.id
				const newBooking = await Booking.create(req.body)

				return res.status(200).json({ message: 'Booking successfully created!', booking: newBooking })
			} else {
				return res.status(400).send(`Booking cannot be created. 
				+Info: Your role is «${res.locals.user.role}» and this classroom 
				is only for «${classroomExists.aimedAt}s».`)
			}
		} else {
			return res.status(400).send(`Booking cannot be created. 
			+Info: There is already another booking with the same data 
			(Date: ${date} - Time: ${time} - IDClassroom: ${idClassroom}) 
			by another user.`)
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