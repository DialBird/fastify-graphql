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
  }
}

export const database = new DatabaseService()
