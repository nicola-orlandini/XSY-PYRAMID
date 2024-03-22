const { handleSuccess } = require("../../reply/handleSuccess")
const { handleError } = require("../../reply/handleError")
const { helloWorld } = require('../../mongoDB/model')

const getController = async (request, reply) => {
  try {
    // scrivo a db
    const collectionModel = await helloWorld()
    const collectionIstance = new collectionModel
    collectionIstance.nome = request.user.name
    collectionIstance.text = 'Hello World! :-)'
    await collectionIstance.save()

    // rispondo
    handleSuccess(reply, 'Hello World! :-)')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { getController }