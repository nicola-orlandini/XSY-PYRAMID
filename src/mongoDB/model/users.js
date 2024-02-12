const schema = {
  name: String,
  password: String,
  secret: {
    type: String,
    default: () => {
      let key = ''
      const keyLength = 16
      const charts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (let i = 0; i < keyLength; i++) {
        const randomChart = charts.charAt(Math.floor(Math.random() * charts.length))
        key += randomChart
      }
      return key
    }
  },
  role: [String]
}

const users = async () => {
  try {
    return await db.getCollection('users', schema)
  } catch (error) {
    throw new Error(`ERROR users schema - ${error.message}`)
  }
}

module.exports = { users }