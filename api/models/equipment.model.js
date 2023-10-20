const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Movie = sequelize.define(
  'movie',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL
    }
  },
  { timestamps: false }
)

module.exports = Movie
