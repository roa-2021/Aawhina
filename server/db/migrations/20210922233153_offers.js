
exports.up = (knex, Promise) => {
  return knex.schema.createTable('offers', t => {
    t.increments('id').primary()
    t.int('request_id')
    t.int('user_id')
    t.timestamp('created_at')
    t.string('notes')
    t.boolean('accepted')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('offers')
}
