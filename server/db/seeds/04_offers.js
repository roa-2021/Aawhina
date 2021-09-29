
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('offers').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('offers').insert([
        { id: 1, request_id: 1, user_id: 1, notes: 'kia ora, I can help. Give me a call on 04 565 7789', accepted: false },
        { id: 2, request_id: 1, user_id: 3, notes: 'I am down the road let me know when you want to do it.', accepted: false },
        { id: 3, request_id: 1, user_id: 4, notes: '', accepted: false }
        ,
        { id: 4, request_id: 2, user_id: 5, notes: '', accepted: false }
        ,
        { id: 5, request_id: 2, user_id: 7, notes: ' sure, I can help', accepted: false }
        ,
        { id: 6, request_id: 2, user_id: 8, notes: ' Hi, I am at number 7 Allen street, come round on Tuesday.', accepted: false }
        ,
        { id: 7, request_id: 3, user_id: 3, notes: ' hi, what is your address', accepted: false }
        ,
        { id: 8, request_id: 3, user_id: 4, notes: '', accepted: false }
        ,
        { id: 9, request_id: 5, user_id: 6, notes: 'Yep I will help', accepted: false }
        ,
        { id: 10, request_id: 4, user_id: 5, notes: 'I can help', accepted: false }
        ,
        { id: 11, request_id: 6, user_id: 3, notes: 'let me know when and where', accepted: false }
        ,
        { id: 12, request_id: 7, user_id: 2, notes: 'yep', accepted: false }
        ,
        { id: 13, request_id: 8, user_id: 2, notes: 'Hi I am Jo', accepted: false }
        ,
        { id: 14, request_id: 5, user_id: 3, notes: '', accepted: false }
      ]);
    }
//     );
// };
