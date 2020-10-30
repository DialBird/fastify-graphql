import { FastifyPluginAsync } from 'fastify'
import { graphql } from 'graphql'
import { buildSchema } from 'type-graphql'

import { MutationResolver, QueryResolver } from './resolvers'

export interface GraphQLAppOption {
  // NOTE: we don't want to run subscription server when testing
  useSubscription: boolean
}

export const graphqlApp: FastifyPluginAsync<GraphQLAppOption> = async (
  app,
  { useSubscription }: GraphQLAppOption,
) => {
  console.log(useSubscription)

  const schema = await buildSchema({
    resolvers: [QueryResolver, MutationResolver],
    emitSchemaFile: true,
  })
  app.post<{ Body: { query: string; variables?: object } }>(
    '/',
    async (request, reply) => {
      const res = await graphql({
        schema,
        source: request.body.query,
        variableValues: request.body.variables,
      })
      reply.send(res)
    },
  )

  app.get('/', async () => 'graphql')
}
