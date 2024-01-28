const { requireRole } = require('../../helpers/requireRole')
const { getRoutePath } = require('../../helpers/getRoutePath')
const { getController } = require('../controller/hello-world')

const getSchema = require('../validate/hello-world')

const getOptions = {
  schema: getSchema,
  preHandler: [requireRole(['super_admin'])]
}

const routes = async () => {
  fastify.get(
    getRoutePath(__filename),
    getOptions,
    getController
  )
}


module.exports = { routes }