const { getRoutePath } = require('../../../src/utils/getRoutePath')
const { postController } = require('../../controller/auth/reset-password')

const postSchema = require('../../validate/auth/reset-password')

const postOptions = {
  schema: postSchema
}

const routes = async () => {
  fastify.post(
    getRoutePath(__filename),
    postOptions,
    postController
  )
}


module.exports = { routes }