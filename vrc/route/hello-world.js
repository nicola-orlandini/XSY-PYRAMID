const { requireRole } = require('../../src/utils/requireRole')
const { getRoutePath } = require('../../src/utils/getRoutePath')
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