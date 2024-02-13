# Pyramid

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

Pyramid sfrutta e interagisce con le seguenti tecnologie:

- docker
- mongodb
- redis
- graphQL
- fastify

## Requisiti

- Docker

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