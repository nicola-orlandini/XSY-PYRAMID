const bcrypt = require('bcrypt')

const { handleSuccess } = require('../../../reply/handleSuccess')
const { handleError } = require('../../../reply/handleError')
const { users } = require('../../../mongoDB/model')

const postController = async (request, reply) => {
  try {
    const userModel = await users()
    const userData = await userModel.findOne({ name: request.user.name })
    if (!userData) {
      throw new Error('user not exists')
    }
    const hash = await new Promise((resolve, reject) => {
      bcrypt.hash(request.body.password, 10).then((hash) => {
        resolve(hash)
      })
    })
    await userModel.updateOne({ name: request.body.name }, { $set: { password: hash } })
    handleSuccess(reply, { msg: 'PASSWORD RESET' })
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { postController }