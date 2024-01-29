const { handleSuccess } = require("../../src/reply/handleSuccess")
const { handleError } = require("../../src/reply/handleError")
const { hello } = require('../../src/mongoDB/schema')

const getController = async (request, reply) => {
  try {
    // scrivo a db
    const collectionModel = await hello()
    const collectionIstance = new collectionModel
    collectionIstance.nome = 'primo documento'
    collectionIstance.idNumerico = 1
    await collectionIstance.save()

    // rispondo
    handleSuccess(reply, 'SUCCESS')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { getController }