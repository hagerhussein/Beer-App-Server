const Sequelize = require('sequelize')
const sequelize = require('../db')

const Beers = require('../beers/model')

const Breweries = sequelize.define('breweries', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'zip_code',
  },
  open: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false, 
  }
},
  {
    tableName: 'breweries',
    timestamps: false
  }
)

Breweries.hasMany(Beers)

module.exports = Breweries 