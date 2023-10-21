const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Building = sequelize.define(
  'building',
  {
    buildingName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.INTEGER,
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    providedServices: {
      type: DataTypes.STRING
    },
    buildingManagerId: {
      type: DataTypes.INTEGER
    }
  },
  { timestamps: false }
)

module.exports = Building
