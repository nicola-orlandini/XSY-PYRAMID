const { requireRole } = require('../../../src/helpers/requireRole')
const { getRoutePath } = require('../../../src/helpers/getRoutePath')
const { postController } = require('../../controller/auth/reset-pwd')

const postSchema = require('../../validate/auth/reset-pwd')

const postOptions = {
  schema: postSchema,
  preHandler: [requireRole(['super_admin'])]
}

const routes = async () => {
  fastify.post(
    getRoutePath(__filename),
    postOptions,
    postController
  )
}


module.exports = { routes }