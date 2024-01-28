const { getRoutePath } = require('../../../src/helpers/getRoutePath')
const { postController } = require('../../controller/auth/login')

const postSchema = require('../../validate/auth/login')

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