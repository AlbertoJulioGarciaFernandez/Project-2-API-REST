const { DataTypes } = require('sequelize'),
  { sequelize } = require('../../database'),
  { getTodaysDate, getCurrentHour } = require('../middleware/index.js');

const Booking = sequelize.define(
  'booking',
  {
    bookingDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { // Date validation
        isAfter: { args: getTodaysDate(), msg: 'An error has occurred. +Info: The chosen date must be greater than today\'s!' }
      }
    },
    bookingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAfter: {args: getCurrentHour(), msg: 'An error has occurred. +Info: The chosen hour must be greater than current\'s!' },
        isBefore: {args: '22', msg: 'An error has occurred. +Info: Classrooms cannot be booked after 21:00h!' },
      }
    },
  },
  { timestamps: false }
)

module.exports = Booking
