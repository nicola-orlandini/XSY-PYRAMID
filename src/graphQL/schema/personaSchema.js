const personaSchema = `
  type Adress {
    numero: Int,
    via: String
  }

  type Query {
    hello: String,
    name: String,
    age: Int,
    adress: Adress
  }
  `

module.exports = { personaSchema }