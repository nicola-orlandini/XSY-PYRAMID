const { handleSuccess } = require("../../src/reply/handleSuccess")
const { handleError } = require("../../src/reply/handleError")
const { helloWorld } = require('../../src/mongoDB/model')

const getController = async (request, reply) => {
  try {
    // scrivo a db
    const collectionModel = await helloWorld()
    const collectionIstance = new collectionModel
    collectionIstance.nome = request.user.name
    collectionIstance.text = 'Hello World! :-)'
    await collectionIstance.save()

    // rispondo
    handleSuccess(reply, 'SUCCESS')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { getController }