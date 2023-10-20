require('dotenv').config()
const { checkConnection, syncModels } = require('./database/index')
const addRelationsToModels = require('./database/models')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncPostgreSQL() {
  await checkConnection()
  addRelationsToModels()

  // Important: Once all the models are synchronized, you don't 
  // need to use synchronization anymore (when we have our database 
  // table structures defined and do not want them to be modified, 
  // we leave the parameter of synModels() empty):
  await syncModels();
  // await syncModels('alter')
}

function initializeAndListenWithExpress() {
  const app = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    .use('/api', require('./api/routes'))

    .listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`)
    })
}

async function startAPI() {
  await checkAndSyncPostgreSQL()
  initializeAndListenWithExpress()
}

startAPI()
