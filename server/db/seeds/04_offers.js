
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('offers').del()
    .then(function () {
      // Inserts seed entries
      return knex('offers').insert([
        { id: 1, request_id: 1, user_id: 1, notes: 'sample notes', accepted: false, created_at: Datenow() },
        { id: 2, request_id: 1, user_id: 3, notes: 'sample notes', accepted: false, created_at: Date.now() },
        { id: 3, request_id: 1, user_id: 4, notes: 'sample notes', accepted: false, created_at: Date.now() }
      ]);
    });
};
