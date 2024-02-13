const libroResolvers = {
  Query: {
    libri: () => {
      return [
        {
          titolo: () => { return 'Il Codice da Vinci' },
          descrizione: () => { return 'Un appassionante thriller che segue il professore di simbologia Robert Langdon mentre cerca di risolvere un misterioso omicidio al Louvre, svelando segreti millenari lungo la strada.' },
          autore: () => { return 'Dan Brown' },
          data_pubblicazione: () => { return 2003 }
        },
        {
          titolo: () => { return '1984' },
          descrizione: () => { return 'Un classico distopico che esplora il controllo totalitario e la manipolazione della verità in un mondo governato da un regime autoritario, lasciando un\'impronta indelebile nel panorama letterario.' },
          autore: () => { return 'George Orwell' },
          data_pubblicazione: () => { return 1949 }
        }
      ]
    }
  }
}

module.exports = { libroResolvers }