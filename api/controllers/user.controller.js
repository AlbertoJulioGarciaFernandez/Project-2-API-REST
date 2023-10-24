const User = require('../models/user.model.js')

async function getAllUsers(req, res) {
	try {
		const users = await User.findAll({
			// Filtering with the «where» clause in case query 
			// params are passed as arguments.
			where: req.query,
			paranoid: false
		})
		if (users) {
			return res.status(200).json({ users: users })
		} else {
			return res.status(404).send('No users found.')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneUser(req, res) {
	try {
		const user = await User.findByPk(req.params.id)
		if (user) {
			return res.status(200).json({ user: user })
		} else {
			return res.status(404).send('User not found.')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getProfile(req, res) {
	try {
		const user = await User.findByPk(res.locals.user.id)
		if (!user) { res.status(500).send("User not found") }
		res.status(200).json(user)
	} catch (error) {
		res.status(402).send(error.message)
	}
}

async function createUser(req, res) {
	try {
		const user = await User.create(
			req.body
		)
		return res.status(200).json({ message: 'User successfully created!', user: user })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateUser(req, res) {
	try {
		// Before trying to update the user, we have to
		// check in the database if he/she exists:
		const user = await User.findByPk(req.params.id)
		if (user) {
			const [userUpdated] = await User.update(req.body, {
				where: {
					id: req.params.id,
				},
			})

			if (userUpdated !== 0) {
				// If we tried to use the variable «user.dataValues» here, 
				// we would not get the updated values for the user being processed
				// but their former data:
				return res.status(200).send('User successfully updated!')
			} else {
				// Here, however, we can use the variable as their data has not changed:
				return res.status(400).json({ message: 'User cannot be updated. +Info: He/She already has those values!', user: user })
			}
		} else {
			return res.status(404).send('User not found.')
		}


	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteUser(req, res) {
	try {
		const user = await User.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (user) {
			return res.status(200).json({ message: 'User successfully deleted!', user: user })
		} else {
			return res.status(404).send('User not found.')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteProfile(req, res) {
	try {
		const user = await User.destroy({
			where: {
				id: res.locals.user.id
			},
		})
		if (user) {
			return res.status(200).json({ message: 'User successfully deleted!', user: user })
		} else {
			return res.status(404).send('User not found.')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllUsers,
	getOneUser,
	getProfile,
	createUser,
	updateUser,
	deleteUser,
	deleteProfile
}
