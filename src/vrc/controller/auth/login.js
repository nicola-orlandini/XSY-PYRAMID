const { handleSuccess } = require("../../../reply/handleSuccess")
const { handleError } = require("../../../reply/handleError")

const controller = async (request, reply) => {
  try {
    // throw new Error('test error')
    const token = fastify.jwt.sign({ user: 'Nicola', id: 'Stocazzo' })
    handleSuccess(reply, token)
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { controller }