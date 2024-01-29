const schema = {
  name: String,
  password: String,
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