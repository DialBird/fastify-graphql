import _fastify from 'fastify'

import { graphqlApp } from 'src/graphql'

const fastify = _fastify({
  logger: true,
})

fastify.get('/', async () => 'ok')

fastify.register(graphqlApp, { prefix: '/graphql', useSubscription: true })

fastify.listen(3000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
