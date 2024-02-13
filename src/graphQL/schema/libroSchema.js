const libroSchema = `
  type Libro {
    titolo: String,
    descrizione: String,
    autore: String,
    data_pubblicazione: Int
  }

  type Query {
    libri: [Libro]
  }
  `

module.exports = { libroSchema }