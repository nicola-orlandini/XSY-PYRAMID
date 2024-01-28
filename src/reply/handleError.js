const handleError = async (reply, error, statusCode = 500, code = 'GENERIC_ERROR', message = 'Generic message') => {
  try {
    reply
      .code(statusCode)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        code: code,
        error: error,
        message: message
      })
  } catch (error) {
    throw new Error(`ERROR handleError - ${error.message}`)
  }
}

module.exports = { handleError }