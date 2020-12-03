// Update with your config settings.

module.exports = {
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite',
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  pg: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      port: 5555,
      password: 'password',
      database: 'postgres',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
}
