import { FastifyPluginAsync } from 'fastify'

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
