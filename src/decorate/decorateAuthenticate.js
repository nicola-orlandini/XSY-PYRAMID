const decorateAuthenticate = () => {
  try {
    fastify.decorate('authenticate', async (request, reply) => {
      try {
        await request.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    })
  } catch (error) {

  }
}

module.exports = {
  decorateAuthenticate
}