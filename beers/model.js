const Sequelize = require('sequelize')
const sequelize = require('../db')

const Beers = sequelize.define('beers', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  style: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  keg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  alcohol: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  volume: {
    type: Sequelize.INTEGER,
    allowNull: false, 
  }
},
  {
    tableName: 'beers',
    timestamps: false
  }
)


module.exports = Beers 