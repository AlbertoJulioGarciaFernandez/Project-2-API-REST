const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Actor = sequelize.define(
  'actor',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
)

module.exports = Actor
