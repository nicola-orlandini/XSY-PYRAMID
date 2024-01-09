const jwt = require('@fastify/jwt')

const registerJwt = () => {
  try {
    fastify.register(jwt, {
      secret: 'supersecret'
    })
  } catch (error) {
    throw new Error(`ERROR registerJwt - ${error.message}`)
  }
}

module.exports = { registerJwt }