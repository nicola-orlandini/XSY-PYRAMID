const { handleSuccess } = require("../../reply/handleSuccess")
const { handleError } = require("../../reply/handleError")
const { hello } = require('../../mongoDB/schema')

const getController = async (request, reply) => {
  try {
    // scrivo a db
    const collectionModel = await db.getCollection('helloCollection', hello())
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