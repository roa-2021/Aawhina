exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        { id: 1, user_id: 2, title: 'Sample Post1', category: 'groceries', details: 'sample details 1', time_frame: 'today', created_at: Date.now() },
        { id: 2, user_id: 2, title: 'Sample Post2', category: 'groceries', details: 'sample details 2', time_frame: 'this week', created_at: Date.now() }
      ]);
    });
};
