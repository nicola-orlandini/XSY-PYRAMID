const schema = {
  nome: String,
  text: String,
  data: {
    type: Date,
    default: Date.now()
  }
}

const helloWorld = async () => {
  try {
    return await db.getCollection('hello-world', schema)
  } catch (error) {
    throw new Error(`ERROR hello schema - ${error.message}`)
  }
}

module.exports = { helloWorld }