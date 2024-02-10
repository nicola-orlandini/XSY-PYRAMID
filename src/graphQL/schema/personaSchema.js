const personaSchema = `
  type Adress {
    numero: Int,
    via: String
  }

  type Persona {
    hello: String,
    name: String,
    age: Int,
    adress: Adress
  }

  type Query {
    persone: [Persona]
  }
  `

module.exports = { personaSchema }