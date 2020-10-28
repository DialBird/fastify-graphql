import _fastify from 'fastify'

const fastify = _fastify({
  logger: true,
})

fastify.get('/', (_request, reply) => {
  reply.send({ hello: 'world' })
})

fastify.listen(3003, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
