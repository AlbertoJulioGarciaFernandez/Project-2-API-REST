const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Actors_Movies = sequelize.define(
  'actors_movies', {
    // If we do not want to add any additional field inside this table,
    // we leave the inside of the curly braces empty.
    // Important: If we do not add the curly braces, we will get a SQL 
    // syntax error. 
},
  { timestamps: false }
)

module.exports = Actors_Movies
