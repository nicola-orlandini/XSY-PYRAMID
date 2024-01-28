const { handleError } = require('./handleError')

const handleSuccess = async (reply, data, statusCode = 200) => {
  try {
    reply
      .code(statusCode)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ data })
  } catch (error) {
    handleError(reply, error.message)
  }
}

module.exports = { handleSuccess }