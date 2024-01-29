const { handleError } = require("../reply/handleError")

const withoutAuthentication = [
  '/auth/login'
]

const decorateAuthenticate = () => {
  try {
    fastify.decorate('authenticate', async (request, reply) => {
      try {
        if (!withoutAuthentication.includes(request.url)) {
          await request.jwtVerify()
        }
      } catch (error) {
        handleError(reply, error.message)
      }
    })
  } catch (error) {
    throw new Error(`ERROR decorateAuthenticate - ${error.message}`)
  }
}

module.exports = {
  decorateAuthenticate
}