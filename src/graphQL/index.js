const { makeExecutableSchema } = require('@graphql-tools/schema')
const { mergeSchemas } = require('@graphql-tools/schema')

const { animaleSchema } = require('./schema/animaleSchema.js')
const { animaleResolvers } = require('./resolvers/animaleResolvers.js')

const { personaSchema } = require('./schema/personaSchema.js')
const { personaResolvers } = require('./resolvers/personaResolvers.js')

const index = () => {
    return mergeSchemas({
        schemas: [
            makeExecutableSchema({ typeDefs: personaSchema, resolvers: personaResolvers }),
            makeExecutableSchema({ typeDefs: animaleSchema, resolvers: animaleResolvers }),
        ]
    })
}

module.exports = index()