const animaleResolvers = {
  Query: {
    helloAnimals: () => { return 'Ciao, animale!' },
    nameAniamals: () => { return 'Lupo' },
    ageAniamals: () => { return 4 }
  }
}

module.exports = { animaleResolvers }