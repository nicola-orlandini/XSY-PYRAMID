const mercurius = require('mercurius')
const schema = require('../graphQL')

const registerMercurius = () => {
  try {
    fastify.register(mercurius, {
      schema,
      path: '/prisma'
    })
  } catch (error) {
    throw new Error(`ERROR registerMercurius - ${error.message}`)
  }
}

module.exports = { registerMercurius }