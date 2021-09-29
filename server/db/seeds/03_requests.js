exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('requests').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {id: 1, user_id: 8, title: 'Help with the shopping', category: 'groceries', details: 'Kia ora, can someone please pick up my groceries for me', time_frame: 'whenever', created_at: '2021-09-26'},
        {id: 2, user_id: 3, title: 'Pick up the kids', category: 'childcare', details: 'can someone take me to get the kids on Tuesday', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 3, user_id: 1, title: 'lift to the shops', category: 'Transport', details: 'I would like a lift to the mall.', time_frame: 'Tomorrow', created_at: '2021-09-26'},
        {id: 4, user_id: 5, title: 'Support to the supermarket', category: 'Buddying', details: 'Thursday morning, Kilbirnie please.', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 5, user_id: 4, title: 'Pool transport', category: 'Transport', details: 'Hello there, I am looking for a neighbour to drop me to Kilbirnie pool', time_frame: 'ongoing', created_at: '2021-09-26'},
        {id: 6, user_id: 4, title: 'Countdown shop', category: 'groceries', details: 'Hi, loookig for soneone to do my groceries as I cant leave the house right now', time_frame: 'Ongoing', created_at: '2021-09-26'},
        {id: 7, user_id: 8, title: 'Help with clothes shopping ', category: 'Buddying', details: 'Hello, I need some help getting to the shops and while I am there.', time_frame: 'whenever', created_at: '2021-09-26'},
        {id: 8, user_id: 3, title: 'Weekly shop', category: 'groceries', details: 'I can\'t get to the supermarket since my injury, need someone to help with the shopping.', time_frame: 'Today', created_at: '2021-09-26'}
      ])
    }
  
