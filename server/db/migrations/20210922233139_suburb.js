
exports.up = (knex, Promise) => {
  return knex.schema.createTable('suburb', t => {
    t.increments('id').primary()
    t.specificType('neighbours', 'INT[]')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('suburb')
}
