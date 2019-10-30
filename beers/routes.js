const { Router } = require('express')
const router = new Router()
const Beers = require('./model')

router.get('/beers', function (req, res, next) {
  Beers
    .findAll()
    .then(beers => {
      res.send({ beers: beers })
    })
    .catch(error => next(error))
})

module.exports = router