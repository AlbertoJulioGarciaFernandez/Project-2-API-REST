const Building = require('../models/building.model.js')

async function getAllBuildings(req, res) {
	try {
		const buildings = await Building.findAll({ paranoid: false })
		if (buildings) {
			return res.status(200).json(buildings)
		} else {
			return res.status(404).send('No buildings found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneBuilding(req, res) {
	try {
		const building = await Building.findByPk(req.params.id)
		if (building) {
			return res.status(200).json(building)
		} else {
			return res.status(404).send('Building not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createBuilding(req, res) {
	try {
		const building = await Building.create({
			name: req.body.name,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            providedServices: req.body.providedServices,
            buildingManagerId: req.body.buildingManagerId
		})
		return res.status(200).json({ message: 'Building created', building: building })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateBuilding(req, res) {
	try {
		const [buildingExists, building] = await Building.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
		if (buildingExists !== 0) {
			return res.status(200).json({ message: 'Building updated', building: building })
		} else {
			return res.status(404).send('Building not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteBuilding(req, res) {
	try {
		const building = await Building.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (building) {
			return res.status(200).json('Building deleted')
		} else {
			return res.status(404).send('Building not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllBuildings,
	getOneBuilding,
	createBuilding,
	updateBuilding,
	deleteBuilding
}
