const postValidate = {
  body: {
    additionalProperties: false,
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    },
    required: ['name', 'password']
  },
  response: {
    "2xx": {
      additionalProperties: false,
      type: 'object',
      properties: {
        data: {
          type: 'object',
          properties: {
            token: {
              type: 'string'
            }
          }
        }
      }
    },
    "4xx": {
      additionalProperties: false,
      type: 'object',
      properties: {
        code: { type: 'string' },
        error: { type: 'string' },
        message: { type: 'string' }
      }
    },
    "5xx": {
      additionalProperties: false,
      type: 'object',
      properties: {
        code: { type: 'string' },
        error: { type: 'string' },
        message: { type: 'string' }
      }
    }
  }
}

module.exports = postValidate