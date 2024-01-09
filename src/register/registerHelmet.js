const helmet = require('@fastify/helmet')

const registerHelmet = () => {
  try {
    fastify.register(helmet)
  } catch (error) {
    throw new Error(`ERROR registerHelmet - ${error.message}`)
  }
}

module.exports = { registerHelmet }