const rateLimit = require('@fastify/rate-limit')

const registerRateLimit = () => {
  try {
    fastify.register(rateLimit, {
      global: false
    })
  } catch (error) {
    throw new Error(`ERROR registerRateLimit - ${error.message}`)
  }
}

module.exports = { registerRateLimit }