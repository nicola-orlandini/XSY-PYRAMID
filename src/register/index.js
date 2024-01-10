const { registerJwt } = require('./registerJwt')
const { registerRoute } = require('./registerRoute')
const { registerHelmet } = require('./registerHelmet')
const { registerMercurius } = require('./registerMercurius')

module.exports = [
  registerJwt,
  registerRoute,
  registerHelmet,
  registerMercurius
]