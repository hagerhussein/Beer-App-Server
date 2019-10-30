const { Router } = require('express')
const router = new Router()
const Breweries = require('./model')
const axios = require('axios')
const Sequelize = require('sequelize')

const Op = Sequelize.Op
const Beers = require('../beers/model')

router.post('/breweries', async (req, res, next) => {
  try {
   const array = await Breweries.findAll();
   const zipCodes = array.map(element => element.zipCode);
   const searchZipcode = req.body.query
   zipCodes.unshift(searchZipcode)
   let searchName
  async function tryThis() { 
    const response = await axios.post('http://www.mapquestapi.com/directions/v2/routematrix?key=LZfJCRANU3UfazErWIszlvWC8geh4sQR',
     {
    "locations": zipCodes
  })
    const distance = await response.data.distance;
    const streets = await response.data.locations.map(obj => obj.street);
    const result = {}
    streets.forEach((street, i) => {
    result[street] = distance[i]
    });
     let entries = Object.entries(result)
     let sorted = entries.sort((a, b) => a[1] - b[1]);
      searchName = sorted[1][0]
      return searchName
}
const newSearch = await tryThis()

  Breweries.findOne({
    where: {
      address: {
        [Op.startsWith]: newSearch
      }
    },
     include: [Beers] 
  })
  .then(brewery => res.send(brewery))
  }
    catch (err) {
      throw err;
    }
    
})

module.exports = router