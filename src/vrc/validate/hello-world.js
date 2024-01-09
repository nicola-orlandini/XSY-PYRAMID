const validate = () => {
  return {
    querystring: {
      additionalProperties: false,
      type: 'object',
      properties: {
        test: {
          type: 'string',
          enum: ['test1', 'test2']
        }
      },
      required: ['test']
    },
    response: {
      "2xx": {
        additionalProperties: false,
        type: 'object',
        properties: {
          statusCode: { type: 'string' },
          data: { type: 'string' }
        }
      },
      "5xx": {
        additionalProperties: false,
        type: 'object',
        properties: {
          statusCode: { type: 'string' },
          code: { type: 'string' },
          error: { type: 'string' },
          message: { type: 'string' }
        }
      }
    }
  }
}

module.exports = { validate }