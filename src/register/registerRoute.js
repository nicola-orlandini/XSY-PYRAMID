const fs = require('fs')

const registerRoute = () => {
  try {
    let fileDir = fs.readdirSync(`${__dirname}/../vrc/route`)
    for (const routePath of fileDir) {
      const { routes } = require(`${__dirname}/../vrc/route/${routePath}`)
      fastify.register(routes)
    }
  } catch (error) {
    throw new Error(`ERROR registerRoute - ${error.message}`)
  }
}

module.exports = { registerRoute }