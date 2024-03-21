const bcrypt = require('bcrypt')

const { handleSuccess } = require('../../../reply/handleSuccess')
const { handleError } = require('../../../reply/handleError')
const { users } = require('../../../mongoDB/model')
const { encrypt } = require('../../../utils/encrypt')

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
    const token = fastify.jwt.sign({ name: userData._doc.name, role: userData._doc.role, secret: userData._doc.secret })
    const tokenEncrypt = encrypt(token)
    handleSuccess(reply, { token: tokenEncrypt })
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { postController }