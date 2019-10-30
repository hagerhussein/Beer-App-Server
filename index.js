const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const beersRouter = require('./beers/routes')
const breweriesRouter = require('./breweries/routes')

const app = express()
const port = process.env.PORT || 4000
app
  .use(cors())
  .use(bodyParser.json())
  .use(beersRouter, breweriesRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))

 