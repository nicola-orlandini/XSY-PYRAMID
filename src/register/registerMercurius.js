const mercurius = require('mercurius')
const resolversQuery = require('../graphQL/resolvers/query')
const schema = require('../graphQL/schema')

const registerMercurius = () => {
  try {
    const resolvers = {
      Query: resolversQuery
    }
    fastify.register(mercurius, {
      schema: schema,
      resolvers,
      path: '/prisma'
    })
  } catch (error) {
    throw new Error(`ERROR registerMercurius - ${error.message}`)
  }
}

module.exports = { registerMercurius }