const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Address = sequelize.define(
  'address',
  {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
)

module.exports = Address
