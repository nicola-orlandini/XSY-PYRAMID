const filmResolvers = {
  Query: {
    films: () => {
      return [
        {
          titolo: () => { return 'Inception' },
          descrizione: () => { return 'Un thriller di fantascienza diretto da Christopher Nolan che segue il furto di informazioni attraverso i sogni. Con uno scenario complesso e effetti visivi straordinari, il film esplora il confine tra realtà e sogno.' },
          autore: () => { return 'Christopher Nolan' },
          data_pubblicazione: () => { return 2010 }
        },
        {
          titolo: () => { return 'La La Land' },
          descrizione: () => { return 'Un musical romantico diretto da Damien Chazelle, che racconta la storia di un pianista jazz e un\'aspirante attrice a Los Angeles. Con coreografie mozzafiato e una colonna sonora memorabile, il film celebra l\'amore e la passione per l\'arte.' },
          autore: () => { return 'Damien Chazelle' },
          data_pubblicazione: () => { return 2016 }
        }
      ]
    }
  }
}

module.exports = { filmResolvers }