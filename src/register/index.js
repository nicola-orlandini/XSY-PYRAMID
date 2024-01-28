const { registerJwt } = require('./registerJwt')
const { registerRoute } = require('./registerRoute')
const { registerHelmet } = require('./registerHelmet')
const { registerMercurius } = require('./registerMercurius')
const { registerFormBody } = require('./registerFormBody')

module.exports = [
  registerJwt,
  registerRoute,
  registerHelmet,
  registerMercurius,
  registerFormBody
]