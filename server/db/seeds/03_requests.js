exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('requests').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {id: 1, user_id: 1, title: 'Help with the shopping', category: 'groceries', details: 'Kia ora, can someone please pick up my groceries for me', time_frame: 'whenever', created_at: '2021-09-26'},
        {id: 2, user_id: 2, title: 'Pick up the kids', category: 'childcare', details: 'can someone take me to get the kids on Tuesday', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 3, user_id: 3, title: 'lift to the shops', category: 'Transport', details: 'I would like a lift to the mall.', time_frame: 'Tomorrow', created_at: '2021-09-26'},
        {id: 4, user_id: 4, title: 'Support to the supermarket', category: 'Buddying', details: 'Thursday morning, Kilbirnie please.', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 5, user_id: 5, title: 'Pool transport', category: 'Transport', details: 'Hello there, I am looking for a neighbour to drop me to Kilbirnie pool', time_frame: 'ongoing', created_at: '2021-09-26'},
        {id: 6, user_id: 6, title: 'Countdown shop', category: 'groceries', details: 'Hi, loookig for soneone to do my groceries as I cant leave the house right now', time_frame: 'Ongoing', created_at: '2021-09-26'},
        {id: 7, user_id: 7, title: 'Help with clothes shopping ', category: 'Buddying', details: 'Hello, I need some help getting to the shops and while I am there.', time_frame: 'whenever', created_at: '2021-09-26'},
        {id: 8, user_id: 8, title: 'Weekly shop', category: 'groceries', details: 'I cant get to the supermarket since my injury, need someone to help with the shopping.', time_frame: 'Today', created_at: '2021-09-26'},
        // {id: 9, user_id: 9, title: 'I need help 9', category: 'childcare', details: 'an unimportant string about post 9', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 10, user_id: 10 ,title: 'I need help 10', category: 'groceries', details: 'an unimportant string about post 10', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 11, user_id: 11 ,title: 'I need help 11', category: 'childcare', details: 'an unimportant string about post 11', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 12, user_id: 12 ,title: 'I need help 12', category: 'groceries', details: 'an unimportant string about post 12', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 13, user_id: 13 ,title: 'I need help 13', category: 'childcare', details: 'an unimportant string about post 13', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 14, user_id: 14 ,title: 'I need help 14', category: 'groceries', details: 'an unimportant string about post 14', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 15, user_id: 15 ,title: 'I need help 15', category: 'childcare', details: 'an unimportant string about post 15', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 16, user_id: 16 ,title: 'I need help 16', category: 'groceries', details: 'an unimportant string about post 16', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 17, user_id: 17 ,title: 'I need help 17', category: 'childcare', details: 'an unimportant string about post 17', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 18, user_id: 18 ,title: 'I need help 18', category: 'groceries', details: 'an unimportant string about post 18', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 19, user_id: 19 ,title: 'I need help 19', category: 'groceries', details: 'an unimportant string about post 19', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 20, user_id: 20 ,title: 'I need help 20', category: 'childcare', details: 'an unimportant string about post 20', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 21, user_id: 21 ,title: 'I need help 21', category: 'groceries', details: 'an unimportant string about post 21', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 22, user_id: 22 ,title: 'I need help 22', category: 'childcare', details: 'an unimportant string about post 22', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 23, user_id: 23 ,title: 'I need help 23', category: 'groceries', details: 'an unimportant string about post 23', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 24, user_id: 24 ,title: 'I need help 24', category: 'childcare', details: 'an unimportant string about post 24', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 25, user_id: 25 ,title: 'I need help 25', category: 'groceries', details: 'an unimportant string about post 25', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 26, user_id: 26 ,title: 'I need help 26', category: 'childcare', details: 'an unimportant string about post 26', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 27, user_id: 27 ,title: 'I need help 27', category: 'groceries', details: 'an unimportant string about post 27', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 28, user_id: 28 ,title: 'I need help 28', category: 'childcare', details: 'an unimportant string about post 28', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 29, user_id: 29 ,title: 'I need help 29', category: 'groceries', details: 'an unimportant string about post 29', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 30, user_id: 30 ,title: 'I need help 30', category: 'childcare', details: 'an unimportant string about post 30', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 31, user_id: 31 ,title: 'I need help 31', category: 'groceries', details: 'an unimportant string about post 31', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 32, user_id: 32 ,title: 'I need help 32', category: 'childcare', details: 'an unimportant string about post 32', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 33, user_id: 33 ,title: 'I need help 33', category: 'groceries', details: 'an unimportant string about post 33', time_frame: 'whenever', created_at: '2021-09-26'},
        // {id: 34, user_id: 34 ,title: 'I need help 34', category: 'groceries', details: 'an unimportant string about post 34', time_frame: 'whenever', created_at: '2021-09-26'}
      ])
    }
  //   )
  // }
