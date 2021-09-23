
exports.up = (knex) => {
  return knex.schema.createTable('offers', t => {
    t.increments('id').primary()
    t.int('request_id')
    t.int('user_id')
    t.string('notes')
    t.boolean('accepted')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('offers')
}