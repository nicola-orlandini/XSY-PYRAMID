const jwt = require('@fastify/jwt')

const registerJwt = () => {
  try {
    fastify.register(jwt, {
      secret: 'pippo'
    })
  } catch (error) {
    throw new Error(`ERROR registerJwt - ${error.message}`)
  }
}

module.exports = { registerJwt }