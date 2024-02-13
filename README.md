# 🏛 PYRAMID 🏛

Pyramid è un templete estremamente flessibile per sviluppare server per chiamate restAPI e graphQL in nodeJS.

## Indice

1. [Descrizione](#descrizione)
2. [Requisiti](#requisiti)
3. [Installazione](#installazione)
4. [Utilizzo](#utilizzo)
5. [Configurazione](#configurazione)
6. [Contributi](#contributi)
7. [Licenza](#licenza)

## Descrizione

Pyramid: Tecnologie Utilizzate

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

- 🐳 docker

## Installazione

Configurazione ambiente:

```bash
mkdir ~/pyramid
cd ~/pyramid
git git@github.com:nicola2896/XSY-PYRAMID.git ./
npm install
docker compose up
```

Configurazione variabili d'ambiente:

- DB_NAME = [nome database]
- MONGO_URI = [per esecuzione in locale specificare host 127.0.0.1]
- MONGO_PORT = [porta database, di default 27017]
- SECRET = [chiave segreta del server, usata per crittografia interna]
- INIT_MONGO_USER = [user con privilegi di super admin]
- INIT_MONGO_PASSWORD = [password con privilegi di super admin]

## Utilizzo

Una volta avviato, il server è preconfigurato per interagire in 2 modalità:
- restAPI, possibilità di configurare ROUTE, SCHEMA, CONTROLLER tramite la directory ./vrc
- graphQL, in ascolto su '/prisma', possibilità di configurare SCHEMA, RESOLVERS tramite la directory ./src/graphQL


## Configurazione

Bla bla bla