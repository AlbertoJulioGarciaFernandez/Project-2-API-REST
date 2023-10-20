const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Country = sequelize.define(
  'country',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
)

module.exports = Country
