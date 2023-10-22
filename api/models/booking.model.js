const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Booking = sequelize.define(
  'booking',
  {
    buildingName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    providedServices: {
      type: DataTypes.STRING,
      allowNull: false,
    },        
  },
  { timestamps: false }
)

module.exports = Booking
