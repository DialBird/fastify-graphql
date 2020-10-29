import knex from 'knex'

class DatabaseService {
  pg!: knex

  init() {
    const pg = knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'postgres',
        port: 5555,
        password: 'password',
        database: 'postgres',
      },
    })

    this.pg = pg
    this.pg.schema.dropTable('users').then((res) => console.log('droped', res))

    this.pg.schema
      .createTableIfNotExists('users', (table) => {
        table.increments()
        table.string('name').notNullable().defaultTo('')
        table.integer('age').notNullable().defaultTo(0)
        table.date('birthday').nullable()
        table.boolean('is_happy').notNullable().defaultTo(true)
        table.timestamps(true, true)
      })
      .then((res) => console.log('mp', res))
      .catch((err) => console.log('no', err))

    this.pg.schema.dropTable('dogs').then((res) => console.log('droped', res))
    this.pg.schema
      .createTableIfNotExists('dogs', (table) => {
        table.increments()
        table.string('name').notNullable().defaultTo('')
        table.integer('user_id').notNullable()
        table.foreign('user_id').references('users.id')
      })
      .then((res) => console.log('mapo', res))
      .catch((err) => console.log('no', err))
  }
}

export const database = new DatabaseService()
