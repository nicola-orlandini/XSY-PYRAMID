const { getRoutePath } = require('../../../helpers/getRoutePath')
const { controller } = require('../../controller/auth/login')
const { validate } = require('../../validate/auth/login')

const routes = async () => {
  fastify.post(
    getRoutePath(__filename),
    { schema: validate },
    controller
  )
}


module.exports = { routes }