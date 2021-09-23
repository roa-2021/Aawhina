
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('suburbs').del()
    .then(function () {
      // Inserts seed entries
      return knex('suburbs').insert([
        {id: 1, neighbours: []},
        {id: 2, neighbours: []},
        {id: 3, neighbours: []}
      ]);
    });
};
