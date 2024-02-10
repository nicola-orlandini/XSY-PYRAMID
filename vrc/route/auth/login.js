const { getRoutePath } = require('../../../src/utils/getRoutePath')
const { postController } = require('../../controller/auth/login')

const postSchema = require('../../validate/auth/login')

const postOptions = {
  schema: postSchema,
  config: {
    rateLimit: {
      max: 5,
      timeWindow: '1 minute'
    }
  }
}

const routes = async () => {
  fastify.post(
    getRoutePath(__filename),
    postOptions,
    postController
  )
}


module.exports = { routes }