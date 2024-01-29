const bcrypt = require('bcrypt')

const { handleSuccess } = require('../../../src/reply/handleSuccess')
const { handleError } = require('../../../src/reply/handleError')
const { users } = require('../../../src/mongoDB/schema')

const postController = async (request, reply) => {
  try {
    const userModel = await users()
    const userData = await userModel.findOne({ name: request.body.name })
    if (!userData) {
      throw new Error('user not exists')
    }
    const match = await bcrypt.compare(request.body.password, userData.password)
    if (!match) {
      throw new Error('password not correct')
    }
    const token = fastify.jwt.sign({ name: userData._doc.name, role: userData._doc.role })
    handleSuccess(reply, { token })
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { postController }