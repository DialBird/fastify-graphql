import fastify from 'fastify'
import { graphqlApp } from 'src/graphql'

const app = fastify({
  logger: { prettyPrint: true, level: 'debug' },
})

app.get('/', async () => 'ok')

app.register(graphqlApp, { prefix: '/graphql', useSubscription: true })

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    app.log.error(err.message)
    process.exit(1)
  }
})
