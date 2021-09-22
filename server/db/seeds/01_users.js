exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'jo' },
        { id: 2, name: 'phill' },
        { id: 3, name: 'zoe' },
        { id: 4, name: 'matt' }
      ])
    })
}
