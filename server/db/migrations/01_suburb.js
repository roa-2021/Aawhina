exports.up = (knex) => {
  return knex.schema.createTable('suburb', t => {
    t.increments('id').primary()
    t.string('name')
    t.string('region')
    t.specificType('neighbours', 'integer ARRAY')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('suburb')
}