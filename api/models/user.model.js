const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
  'user',
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

module.exports = User
