exports.up = (knex) => {
  return knex.schema.createTable('requests', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.string('title')
    t.string('category')
    t.string('details')
    t.string('time_frame')
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('requests')
}
