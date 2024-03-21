const bcrypt = require('bcrypt')

const { handleSuccess } = require("../../../reply/handleSuccess")
const { handleError } = require("../../../reply/handleError")
const { users } = require("../../../mongoDB/model")

const postController = async (request, reply) => {
  try {
    // scrivo a db
    const userModel = await users()
    const isExists = await userModel.findOne({ name: request.body.name })
    if (isExists) {
      throw new Error('user exist')
    }
    const hash = await new Promise((resolve, reject) => {
      bcrypt.hash(request.body.password, 10).then((hash) => {
        resolve(hash)
      })
    })
    const userIstance = new userModel
    userIstance.name = request.body.name
    userIstance.password = hash
    userIstance.role = []
    userIstance.role.push('user')
    await userIstance.save()
    // rispondo
    handleSuccess(reply, 'USER REGISTER')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { postController }