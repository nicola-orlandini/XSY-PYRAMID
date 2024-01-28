const { handleSuccess } = require("../../reply/handleSuccess")
const { handleError } = require("../../reply/handleError")
const { hello } = require('../../mongoDB/schema')

const controller = async (request, reply) => {
  try {
    // scrivo a db
    const CollectionModel = await db.getCollection('helloCollection', hello())
    const collectionIstance = new CollectionModel
    collectionIstance.nome = 'primo documento'
    collectionIstance.idNumerico = 1
    await collectionIstance.save()

    // rispondo
    handleSuccess(reply, 'SUCCESS')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { controller }