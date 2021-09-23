exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('first_name')
    t.string('last_name')
    t.string('email')
    t.binary('hash')
    t.int('suburb_id')
    t.string('bio')
    t.string('gender')
    t.string('image')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
