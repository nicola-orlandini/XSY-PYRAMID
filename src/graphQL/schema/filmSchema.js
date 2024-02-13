const filmSchema = `
  type Film {
    titolo: String,
    descrizione: String,
    autore: String,
    data_pubblicazione: Int
  }

  type Query {
    films: [Film]
  }
  `

module.exports = { filmSchema }