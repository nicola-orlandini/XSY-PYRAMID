const { requireRole } = require('../../../utils/requireRole')
const { getRoutePath } = require('../../../utils/getRoutePath')

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