const personaResolvers = {
  Query: {
    persone: () => {
      return [
        {
          hello: () => { return 'Ciao, mondo!' },
          name: () => { return 'Nicola' },
          age: () => { return 27 },
          adress: () => { return { via: 'via Mario Rocca', numero: 1 } }
        }
      ]
    }
  }
}

module.exports = { personaResolvers }