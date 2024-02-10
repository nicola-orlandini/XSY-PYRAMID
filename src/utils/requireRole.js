const requireRole = (roles) => (request, replay, done) => {
  try {
    let hasRole = false
    const token = request.headers.authorization.replace('Bearer ', '')
    const decodeToken = fastify.jwt.decode(token)
    for (const role of roles) {
      if (decodeToken.role.includes(role)) {
        hasRole = true
        break
      }
    }
    if (!hasRole) {
      throw new Error('permission denied')
    }
    done()
  } catch (error) {
    throw new Error(`ERROR requireRole - ${error.message}`)
  }
}

module.exports = { requireRole }