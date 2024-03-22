# 🏛 PYRAMID 🏛

Pyramid è un template per server web REST API e GraphQL in Nodejs 

## Indice

1. [Descrizione](#descrizione)
2. [Requisiti](#requisiti)
3. [Installazione](#installazione)
4. [Utilizzo](#utilizzo)

## Descrizione
Pyramid è un template flessibile per la creazione di server web REST API o GraphQL, implementati in Nodejs. Fornisce una base su cui costruire applicazioni scalabili e performanti.

**Tecnologie Utilizzate**

Pyramid è un progetto che sfrutta diverse tecnologie per offrire funzionalità avanzate. Di seguito sono elencate e descritte le principali tecnologie coinvolte:

- 🐳 Docker

per isolare l'ambiente di esecuzione semplificando così il deploy in produzione.

- 🍃 MongoDB

per avere una base dati flessibile e performante.

- 🗃️ Redis

per sistemi di caching, aiuta a ottimizzare i tempi di risposta del server e le risorse utilizzate.

- 🧬 GraphQL

per consentire una comunicazione flessibile e efficiente tra il frontend e il backend in alternativa all'approccio restAPI.

- 🚀 Fastify

per gestire in modo organizzato le richieste HTTP, garantendo un'elaborazione rapida e una risposta reattiva.

## Requisiti

- 🐳 Docker

## Installazione

Ambiente:

```bash
mkdir ~/pyramid
cd ~/pyramid
git clone git@github.com:nicola-orlandini/XSY-PYRAMID.git ./
npm install
docker compose up
```

Variabili d'ambiente:

```bash
DB_NAME = pyramid
MONGO_URI = mongodb://127.0.0.1
MONGO_PORT = 27017
SECRET = aaaBBBccc
INIT_MONGO_USER = admin
INIT_MONGO_PASSWORD = password
```

- **DB_NAME** definisce il nome del databse
- **MONGO_URI** definisce l'url in cui è in ascolto il server mongodb
- **MONGO_PORT** definisce la porta in cui è in ascolto il servver mongodb
- **SECRET** definisce una chiave privata randomica del server per proteggere con crittografia i dati sensibili del server
- **INIT_MONGO_USER** definisce il nome dell'utente in fase di inizializzazione del server
- **INIT_MONGO_PASSWORD** definisce la password dell'utente admin in fase di inizializzazione del server

## Utilizzo

Pyramid offre due approcci flessibili per la creazione di server web, permettendo agli sviluppatori di scegliere la metodologia più adatta alle proprie esigenze.

🚀 **Approccio REST API:**

Pyramid supporta l'approccio classico REST API, consentendo di organizzare facilmente le risorse tramite la seguente struttura all'interno della directory "./src/vrc":

- `./src/vrc/validate`: Contiene i file per la validazione dei dati utilizzando i validatori di Fastify.

- `./src/vrc/route`: Include i file delle route di Fastify, dove ogni percorso definisce il proprio URL, ad esempio, una route in "./vrc/route/auth/login.js" risponderà all'URL "localhost/auth/login".

- `./src/vrc/controller`: Racchiude i controller di Fastify, che gestiscono la logica delle route per i vari metodi come GET, POST, DELETE e PATCH.

Questo approccio consente di strutturare chiaramente la gestione delle richieste e delle risposte attraverso le convenzioni REST, fornendo una base solida per la creazione di API scalabili.

🧬 **Approccio GraphQL:**

Per coloro che preferiscono utilizzare GraphQL, Pyramid offre un server GraphQL in ascolto all'indirizzo POST "localhost/prisma". La struttura di questo approccio è organizzata nella directory "/src/graphQL":

- `./src/graphQL/resolvers`: Contiene i resolvers, che definiscono come soddisfare le richieste GraphQL.

- `./src/graphQL/schema`: Include gli schemi GraphQL che definiscono la struttura e i tipi di dati supportati dal server.

Pyramid offre, dunque, un'architettura flessibile che si adatta alle preferenze e alle esigenze specifiche del progetto, permettendo di creare server web con facilità e strutturati in modo chiaro.

