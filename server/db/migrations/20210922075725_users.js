exports.up = (knex) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
