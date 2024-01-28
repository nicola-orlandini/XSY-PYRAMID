const formBody = require('@fastify/formbody')

const registerFormBody = () => {
  try {
    fastify.register(formBody)
  } catch (error) {
    throw new Error(`ERROR registerFormBody - ${error.message}`)
  }
}

module.exports = { registerFormBody }