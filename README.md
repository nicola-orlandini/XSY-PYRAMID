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

## Configurazione
