exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('offers').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('offers').insert([
        { id: 1, request_id: 5, user_id: 5, notes: 'Kia ora, I can help. Give me a call on 04 565 7789', accepted: false },
        { id: 2, request_id: 6, user_id: 3, notes: 'I am down the road let me know when you want to do it.', accepted: false },
        { id: 3, request_id: 6, user_id: 7, notes: ' Happy to help with this, I shop there anyway. Text me on 021 166 517', accepted: false },
        { id: 6, request_id: 2, user_id: 8, notes: ' Hi, I am at number 7 Allen street, come round on Tuesday.', accepted: false },
        { id: 7, request_id: 3, user_id: 3, notes: ' hi, what is your address', accepted: false }
      ]);
    }
//     );
// };
