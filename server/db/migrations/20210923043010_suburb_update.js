
exports.up = function(knex) {
  knex.schema.table('suburb', function(t) {
    t.string('name')
  })
}

exports.down = function(knex) {
  knex.schema.table('suburb', function(t) {
    t.dropColumn('name')
  })
}
