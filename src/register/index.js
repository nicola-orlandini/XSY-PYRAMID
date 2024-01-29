const { registerJwt } = require('./registerJwt')
const { registerHelmet } = require('./registerHelmet')
const { registerMercurius } = require('./registerMercurius')
const { registerFormBody } = require('./registerFormBody')
const { registerRateLimit } = require('./registerRateLimit')
// ULTIMA RISORSA DA CARICARE
const { registerRoute } = require('./registerRoute')


module.exports = [
  registerJwt,
  registerHelmet,
  registerMercurius,
  registerFormBody,
  registerRateLimit,
  // ULTIMA RISORSA DA CARICARE
  registerRoute,
]