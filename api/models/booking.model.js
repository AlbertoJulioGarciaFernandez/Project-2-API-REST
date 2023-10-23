const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Booking = sequelize.define(
  'booking',
  {
    bookingDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },       
  },
  { timestamps: false }
)

module.exports = Booking
