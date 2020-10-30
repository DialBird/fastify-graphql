exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id')
      table.string('name').notNullable().defaultTo('')
      table.integer('age').notNullable().defaultTo(0)
      table.date('birthday').nullable()
      table.boolean('is_happy').notNullable().defaultTo(true)
      table.timestamps(true, true)
    })
    .createTable('dogs', function (table) {
      table.increments('id')
      table.string('name').notNullable().defaultTo('')
      table.integer('user_id').notNullable()
      table.foreign('user_id').references('users.id')
      table.timestamps(true, true)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTable('dogs').dropTable('users')
}
