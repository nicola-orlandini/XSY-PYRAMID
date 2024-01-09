const { getRoutePath } = require('../../helpers/getRoutePath')
const { controller } = require('../controller/hello-world')
const { validate } = require('../validate/hello-world')

const routes = async () => {
  fastify.get(
    getRoutePath(__filename),
    { schema: validate },
    controller
  )
}


module.exports = { routes }