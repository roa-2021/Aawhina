
exports.up = (knex, Promise) => {
  return knex.schema.createTable('requests', t => {
    t.increments('id').primary()
    t.int('user_id')
    t.string('title')
    t.string('category')
    t.string('details')
    t.string('time_frame')
    t.timestamp('created_at').defaultTo(knex.fn.now())

  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('requests')
}
