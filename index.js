require('dotenv').config()

global.fastify = require('fastify')({ logger: false })

// INIZIALIZZO database
const dbName = process.env.DB_NAME
const Db = require('./src/mongoDB')
const db = new Db(dbName)
global.db = db

const decorate = require('./src/decorate')
const register = require('./src/register')
const addHook = require('./src/addHook')

// INIZIALIZZO register
for (const registerFunction of register) {
  registerFunction()
}

// INIZIALIZZO decorate
for (const decorateFunction of decorate) {
  decorateFunction()
}

// INIZIALIZZO addHook
for (const addHookFunction of addHook) {
  addHookFunction()
}

const server = async () => {
  try {
    await fastify.listen({ host: '0.0.0.0', port: 3001 })
    fastify.log.info(`Server in ascolto sulla porta ${fastify.server.address().port}`)
    console.log(`Server in ascolto sulla porta ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    console.log(err.message)
    process.exit(0)
  }
}

server()