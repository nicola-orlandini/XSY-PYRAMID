const mongoose = require('mongoose')
const { Sema } = require('async-sema')
const semaphore = new Sema(1)

class Database {
  constructor(name) {
    try {
      this.name = name
      if (!process.env.MONGO_URI) {
        throw new Error('DB ERROR - ENV NOT FOUND - MONGO_URI IS EMPTY')
      }
      if (!process.env.MONGO_PORT) {
        throw new Error('DB ERROR - ENV NOT FOUND - MONGO_PORT IS EMPTY')
      }
      const urlDB = `${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${this.name}`
      this.connection = mongoose.createConnection(urlDB)
      this.collection = {}
    } catch (error) {
      throw new Error(`ERROR constructor - ${error.message}`)
    }
  }
  async getCollection(name, schema = {}) {
    await semaphore.acquire()
    try {
      if (this.collection[name]) {
        return this.collection[name]
      } else {
        if (Object.keys(schema).length == 0) {
          throw new Error(`schema not defined for ${name}`)
        }
        this.collection[name] = this.connection.model(name, mongoose.Schema(schema))
        return this.collection[name]
      }
    } catch (error) {
      throw new Error(`ERROR getCollection - ${error.message}`)
    } finally {
      semaphore.release()
    }
  }
}

module.exports = Database