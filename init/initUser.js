require('dotenv').config({ path: `${__dirname}/../.env` })
const bcrypt = require('bcrypt')

// INIZIALIZZO database
const dbName = process.env.DB_NAME
const Db = require('../src/mongoDB')
const db = new Db(dbName)
global.db = db

const { users } = require('../src/mongoDB/model')

// !!! ATTENZIONE !!!
// CON QUESTA FUNZIONE VENGONO RESETTATI TUTTI GLI USER DEL DATABASE
const initUser = async () => {
  try {
    const usersModel = await users()

    console.log('+++ CANCELLO UTENTI +++')
    await usersModel.deleteMany({})

    console.log('+++ CREO L\'HASH DELLA PASSWORD +++')
    const hash = bcrypt.hashSync(process.env.INIT_MONGO_PASSWORD, 10)

    console.log(`+++ CREO IL SUPER USER +++\n\nNAME: ${process.env.INIT_MONGO_USER}\nPASSWORD: ${process.env.INIT_MONGO_PASSWORD}\n\n`)
    const usersData = new usersModel
    usersData.name = process.env.INIT_MONGO_USER
    usersData.password = hash
    usersData.role = ['super_admin']
    await usersData.save()

    console.log('+++ RESET COMPLETATO +++')
    console.log('\nNOTE DI SICUREZZA: SOSTITUISCI LA PASSWORD DI super_admin CON \'/auth/reset-password\'')
  } catch (error) {
    console.log(`ERROR initUser - ${error.message}`)
  } finally {
    process.exit(0)
  }
}

initUser()