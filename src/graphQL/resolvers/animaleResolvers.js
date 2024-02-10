const animaleResolvers = {
  Query: {
    animali: () => {
      return [
        {
          hello: () => { return 'Ciao, animale!' },
          name: () => { return 'Lupo' },
          age: () => { return 4 }
        }
      ]
    }
  }
}

module.exports = { animaleResolvers }