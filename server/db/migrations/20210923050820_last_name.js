
exports.up = function(knex) {
  knex.schema.table('users', function(t) {
    t.string('last_name')
  })
}

exports.down = function(knex) {
  knex.schema.table('users', function(t) {
    t.dropColumn('last_name')
  })
}

