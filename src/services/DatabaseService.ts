import knex from 'knex'

class DatabaseService {
  db!: knex

  init() {
    const db = knex({
      client: 'pg',
      connection: {
        host: '0.0.0.0:5555',
        user: 'postgres',
        password: 'password',
        database: 'postgres',
      },
    })

    this.db = db
  }
}

export const database = new DatabaseService()
