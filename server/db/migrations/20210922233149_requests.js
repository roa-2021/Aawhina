
exports.up = (knex, Promise) => {
  return knex.schema.createTable('requests', t => {
    t.increments('id').primary()
    t.int('user_id')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.string('title')
    t.string('category')
    t.string('details')
    t.string('time_frame')

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('requests')
}
