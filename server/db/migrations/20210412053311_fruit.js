exports.up = (knex) => {
  return knex.schema.createTable('fruit', t => {
    t.increments('id').primary()
    t.string('name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('fruit')
}
