const { requireRole } = require('../../../src/utils/requireRole')
const { getRoutePath } = require('../../../src/utils/getRoutePath')

const { postController } = require('../../controller/admin/register')
const postSchema = require('../../validate/admin/register')

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