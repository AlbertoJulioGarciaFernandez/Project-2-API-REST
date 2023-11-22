const { DataTypes } = require("sequelize"),
  { sequelize } = require("../../database"),
  {
    getYesterdaysDate,
    getTodaysDay,
    getCurrentHour,
    validateDayAndHour,
  } = require("../middleware/index.js");

const Booking = sequelize.define(
  "booking",
  {
    bookingDate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Date validation
        isAfter: {
          args: getYesterdaysDate(),
          msg: "An error has occurred. +Info: The chosen date must be today or after today!",
        },
      },
    },
    bookingTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validateDayAndHour(bookingDate) {
          console.log(bookingDate);
          const d = new Date(),
            day = d.getDate(),
            hour = d.getHours();

          if (selectedDay === d.getDate() && selectedHour === d.getHours()) {
            throw new Error('An error has occurred. +Info: The hour has to be greater than current\'s if the selected day equals today!');
          }
        },
        // isAfter: {
        //   args: getCurrentHour(),
        //   msg: "An error has occurred. +Info: The chosen hour must be greater than currents!",
        // },
        // isBefore: {
        //   args: "22",
        //   msg: "An error has occurred. +Info: Classrooms cannot be booked after 21:00h!",
        // },
      },
    },
  },
  { timestamps: false }
);

module.exports = Booking;
