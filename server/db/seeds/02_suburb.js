exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('suburb').del()
    .then(function () {
      // Inserts seed entries
      return knex('suburb').insert([
        { id: 2, name: 'Hataitai', region: 'Wellington', neighbours: [] },
        { id: 1, name: 'Brooklyn', region: 'Wellington', neighbours: [] },
        { id: 3, name: 'Island bay', region: 'Wellington', neighbours: [] }
      ])
    })
}
