const Equipment = require("../models/equipment.model.js");

//users user

async function getAllEquipments(req, res) {
  try {
    const equipment = await Equipment.findAll({ paranoid: false });
    if (equipment) {
      return res.status(200).json(equipment);
    } else {
      return res.status(404).send("No piece of equipment found on the database");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getOneEquipment(req, res) {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (equipment) {
      return res.status(200).json(equipment);
    } else {
      return res.status(404).send("Equipment not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createEquipment(req, res) {
  try {
    const equipment = await Equipment.create(req.body);
    return res
      .status(200)
      .json({ message: "Equipment created", equipment: equipment });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateEquipment(req, res) {
  try {
    const equipment = await Equipment.findByPk(req.params.id);
    if (equipment) {
      // Important: To get the number of records updated, we have to use destructuring
      // like this:
      const [equipmentExists, numPiecesOfEquipmentUpdated] =
        await Equipment.update(req.body, {
          returning: true,
          where: {
            id: req.params.id,
          },
        });

      if (numPiecesOfEquipmentUpdated > 0) {
        return res
          .status(200)
          .send(
            `The piece of equipment with id ${req.params.id} has been successfully updated!`
          );
      } else {
        return res.status(500).send({
          message:
            "The piece of equipment cannot be updated. +Info: There is nothing to update!",
          equipment: equipment,
        });
      }
    } else {
      return res
        .status(404)
        .send(
          `The piece of equipment with id ${req.params.id} does not exist.`
        );
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteEquipment(req, res) {
  try {
    const equipment = await Equipment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (equipment) {
      return res.status(200).json("Equipment deleted");
    } else {
      return res.status(404).send("Equipment not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllEquipments,
  getOneEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
};
