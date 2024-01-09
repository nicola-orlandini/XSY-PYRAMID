const { registerJwt } = require('./registerJwt')
const { registerRoute } = require('./registerRoute')
const { registerHelmet } = require('./registerHelmet')

module.exports = [
  registerJwt,
  registerRoute,
  registerHelmet
]