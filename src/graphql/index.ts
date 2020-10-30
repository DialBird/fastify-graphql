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
  app.get('/', async () => 'graphql')
}
