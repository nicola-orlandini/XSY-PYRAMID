const { controller } = require('../controller/hello-world')
const { validate } = require('../validate/hello-world')

const routes = async () => {
  const nameRoute = __filename.split('route/').pop().replace('.js', '')
  // get
  // fastify.addHook("onRequest", fastify.authenticate)
  fastify.get(
    `/${nameRoute}`,
    { schema: validate },
    controller
  )

}


module.exports = { routes }