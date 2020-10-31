import knex from 'knex'
// @ts-ignore
import config from 'knexfile'

class DatabaseService {
  db!: knex

  init() {
    const db = knex(config.sqlite)
    // const db = knex(config.pg)

    this.db = db
  }
}

export const database = new DatabaseService()
