const fs = require('fs')
const path = require('path')

const registerRoute = () => {
  try {
    const fileDir = readRoute(`${__dirname}/../../vrc/route`)
    for (const routePath of fileDir) {
      const { routes } = require(routePath)
      fastify.register(routes)
    }
  } catch (error) {
    throw new Error(`ERROR registerRoute - ${error.message}`)
  }
}

function readRoute(directory) {
  try {
    const items = fs.readdirSync(directory)
    const fileJSPaths = []
    for (const item of items) {
      const fullPath = path.join(directory, item)
      const isDirectory = (fs.lstatSync(fullPath)).isDirectory()
      if (isDirectory) {
        const filesInSubdirectory = readRoute(fullPath)
        fileJSPaths.push(...filesInSubdirectory)
      } else {
        if (path.extname(fullPath).toLowerCase() === '.js') {
          fileJSPaths.push(fullPath)
        }
      }
    }
    return fileJSPaths
  } catch (error) {
    throw new Error(`ERROR readRoute - ${error.message}`)
  }
}

module.exports = { registerRoute }