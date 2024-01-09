const { handleSuccess } = require("../../reply/handleSuccess")
const { handleError } = require("../../reply/handleError")

const controller = async (request, reply) => {
  try {
    // throw new Error('test error')
    handleSuccess(reply, 'SUCCESS')
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { controller }