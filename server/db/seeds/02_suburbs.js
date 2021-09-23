exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('suburb').del()
    .then(function () {
      // Inserts seed entries
      return knex('suburb').insert([
        { id: 1, neighbours: [] },
        { id: 2, neighbours: [] },
        { id: 3, neighbours: [] }
      ])
    })
}
