exports.up = (knex) => {
  return knex.schema.createTable('suburb', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('region')
    t.string('neighbours')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('suburb')
}
