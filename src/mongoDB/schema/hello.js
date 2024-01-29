const schema = {
  nome: String,
  idNumerico: Number
}

const hello = async () => {
  try {
    return await db.getCollection('helloCollection', schema)
  } catch (error) {
    throw new Error(`ERROR hello schema - ${error.message}`)
  }
}

module.exports = { hello }