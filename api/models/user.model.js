const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'buildingAdmin', 'professor', 'student')
    }
  },
  { timestamps: false }
)

module.exports = User
