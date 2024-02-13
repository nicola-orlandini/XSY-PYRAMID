# 🏛 PYRAMID 🏛

Pyramid è un template per server web REST API e GraphQL in Node.js

## Indice

1. [Descrizione](#descrizione)
2. [Requisiti](#requisiti)
3. [Installazione](#installazione)
4. [Utilizzo](#utilizzo)
5. [Configurazione](#configurazione)

## Descrizione
Pyramid è un progetto con obiettivo di essere un template flessibile per la creazione di server web REST API o GraphQL, implementati in Node.js. Questo framework fornisce una solida base su cui costruire applicazioni scalabili e performanti, consentendo agli sviluppatori di concentrarsi sulle funzionalità specifiche del loro progetto senza dover partire da zero.

Tecnologie Utilizzate

Pyramid è un progetto che sfrutta diverse tecnologie per offrire funzionalità avanzate. Di seguito sono elencate e descritte le principali tecnologie coinvolte:

- 🐳 Docker

Pyramid utilizza Docker per la gestione dei container. Questa tecnologia permette di creare un ambiente isolato, semplificando così il processo di distribuzione e l'esecuzione del server.

- 🍃 MongoDB

La base dati di Pyramid è supportata da MongoDB offrendo flessibilità nello schema e prestazioni ottimizzate per gestire grandi quantità di dati.

- 🗃️ Redis

Pyramid ottimizza le prestazioni dell'applicazione utilizzando Redis come sistema di archiviazione chiave-valore in memoria.

- 🧬 GraphQL

Pyramid sfrutta GraphQL per consentire una comunicazione flessibile e efficiente tra il frontend e il backend, facilitando la gestione delle richieste di dati.

- 🚀 Fastify

Pyramid utilizza Fastify come framework web per gestire le richieste HTTP, garantendo un'elaborazione rapida e una risposta reattiva.

## Requisiti

- 🐳 Docker

## Installazione

Ambiente:

```bash
mkdir ~/pyramid
cd ~/pyramid
git git@github.com:nicola2896/XSY-PYRAMID.git ./
npm install
docker compose up
```

Variabili d'ambiente:

- DB_NAME = [nome database]
- MONGO_URI = [127.0.0.1]
- MONGO_PORT = [27017]
- SECRET = [chiave randomica del server]
- INIT_MONGO_USER = [mongodb user]
- INIT_MONGO_PASSWORD = [mongodb password]

## Utilizzo

Pyramid offre due approcci flessibili per la creazione di server web, permettendo agli sviluppatori di scegliere la metodologia più adatta alle proprie esigenze.

- 🚀 Approccio REST API:

Pyramid supporta l'approccio classico REST API, consentendo di organizzare facilmente le risorse tramite la seguente struttura all'interno della directory "./vrc":
    - `/vrc/validate`: Contiene i file per la validazione dei dati utilizzando i validatori di Fastify.
    - `/vrc/route`: Include i file delle route di Fastify, dove ogni percorso definisce il proprio URL, ad esempio, una route in "./vrc/route/auth/login.js" risponderà all'URL "localhost/auth/login".
    - `./vrc/controller`: Racchiude i controller di Fastify, che gestiscono la logica delle route per i vari metodi come GET, POST, DELETE e PATCH.

Questo approccio consente di strutturare chiaramente la gestione delle richieste e delle risposte attraverso le convenzioni REST, fornendo una base solida per la creazione di API scalabili.

- 🧬 Approccio GraphQL:

Per coloro che preferiscono utilizzare GraphQL, Pyramid offre un server GraphQL in ascolto all'indirizzo POST "localhost/prisma". La struttura di questo approccio è organizzata nella directory "/src/graphQL":
    - `/src/graphQL/resolvers`: Contiene i resolvers, che definiscono come soddisfare le richieste GraphQL.
    - `/src/graphQL/schema`: Include gli schemi GraphQL che definiscono la struttura e i tipi di dati supportati dal server.

Con questo approccio, gli sviluppatori possono sfruttare la potenza di GraphQL per gestire le query e le mutazioni in modo efficiente, organizzando facilmente le risorse del server GraphQL.

Pyramid offre, dunque, un'architettura flessibile che si adatta alle preferenze e alle esigenze specifiche del progetto, permettendo di creare server web con facilità e strutturati in modo chiaro.

## Configurazione
