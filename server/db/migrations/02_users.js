exports.up = (knex) => {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('first_name')
    t.string('last_name')
    t.string('email')
    t.int('suburb_id')
    t.string('bio')
    t.string('gender')
    t.string('spoken_languages')
    t.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
