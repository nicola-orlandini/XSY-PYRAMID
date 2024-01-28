const addHookAuthenticate = () => {
  try {
    fastify.addHook('onRequest', fastify.authenticate)
  } catch (error) {
    throw new Error(`ERROR addHookAuthenticate - ${error.message}`)
  }
}

module.exports = { addHookAuthenticate }