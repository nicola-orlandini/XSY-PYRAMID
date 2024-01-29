const jwt = require('@fastify/jwt')

const registerJwt = () => {
  try {
    fastify.register(jwt, {
      secret: process.env.SECRET,
      sign: {
        expiresIn: parseInt(process.env.EXPIRES_TOKEN_LOGIN)
      }
    })
  } catch (error) {
    throw new Error(`ERROR registerJwt - ${error.message}`)
  }
}

module.exports = { registerJwt }