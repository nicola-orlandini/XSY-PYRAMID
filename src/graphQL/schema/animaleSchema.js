const animaleSchema = `
  type Animale {
    hello: String,
    name: String,
    age: Int
  }

  type Query {
    animali: [Animale]
  }
  `

module.exports = { animaleSchema }