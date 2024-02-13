const { makeExecutableSchema } = require('@graphql-tools/schema')
const { mergeSchemas } = require('@graphql-tools/schema')

const { libroSchema } = require('./schema/libroSchema.js')
const { libroResolvers } = require('./resolvers/libroResolvers.js')

const { filmSchema } = require('./schema/filmSchema.js')
const { filmResolvers } = require('./resolvers/filmResolvers.js')

const index = () => {
    return mergeSchemas({
        schemas: [
            makeExecutableSchema({ typeDefs: libroSchema, resolvers: libroResolvers }),
            makeExecutableSchema({ typeDefs: filmSchema, resolvers: filmResolvers }),
        ]
    })
}

module.exports = index()