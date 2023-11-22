<<<<<<< HEAD
const { DataTypes } = require("sequelize"),
  { sequelize } = require("../../database"),
  {
    getYesterdaysDate,
    getTodaysDate,
    getCurrentHour,
    validateDayAndHour,
    getLastAvailableBookingHour,
    getOpeningHour,
  } = require("../middleware/index.js");

// The following variable will be important to store
// the date the user selects in the form:
let selectedBookingDate;
=======
const { DataTypes } = require('sequelize'),
  { sequelize } = require('../../database'),
  { getTodaysDate } = require('../middleware/index.js');
>>>>>>> parent of 1fbea33 (Hour validation, implemented)

const Booking = sequelize.define(
  "booking",
  {
    bookingDate: {
      type: DataTypes.STRING,
      allowNull: false,
<<<<<<< HEAD
      validate: {
        // Getting the booking date the user selects in
        // the form:
        getBookingDate(bookingDate) {
          selectedBookingDate = bookingDate;
        },
        // Date validation
        isAfter: {
          args: getYesterdaysDate(),
          msg: "An error has occurred. +Info: The chosen date must be today or after today!",
        },
      },
=======
      validate: { // Date validation
        isAfter: { args: getTodaysDate(), msg: 'An error has occurred. +Info: The date must be a date greater than today\'s!' }
      }
>>>>>>> parent of 1fbea33 (Hour validation, implemented)
    },
    bookingTime: {
      type: DataTypes.STRING,
      allowNull: false,
<<<<<<< HEAD
      validate: {
        validateDayAndHour(bookingTime) {
          let formattedSelectedDay = selectedBookingDate.substring(
              selectedBookingDate.length - 2,
              selectedBookingDate.length
            ),
            formattedSelectedHour = bookingTime.substring(0, 2);

          const d = new Date(),
            day = d.getDate(),
            hour = d.getHours();

          // Nobody will be allowed to make a classroom reservation if the selected day equals today and
          // the hour equals or precedes current's:
          if (
            (formattedSelectedDay === day.toString() &&
              formattedSelectedHour === hour.toString()) ||
            (formattedSelectedDay === day.toString() &&
              formattedSelectedHour < hour.toString())
          ) {
            throw new Error(
              "An error has occurred. +Info: The hour has to be greater than current's if the selected day equals today!"
            );
          }
        },
        // The following validation prevents users from making classroom reservations before 8.00 am or after 9.00 pm:
        validateHour(bookingTime) {
          if (
            bookingTime.substring(0, 2) < "08" ||
            bookingTime.substring(0, 2) > "21"
          ) {
            throw new Error(
              "An error has occurred. +Info: Classrooms cannot be booked before 08.00h or after 21:00h!"
            );
          }
        },
      },
=======
>>>>>>> parent of 1fbea33 (Hour validation, implemented)
    },
  },
  { timestamps: false }
);

module.exports = Booking;
