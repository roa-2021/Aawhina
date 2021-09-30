exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('requests').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {id: 1, user_id: 8, title: 'Help with Grocery Shopping', category: 'Groceries', details: 'Kia ora, can someone please pick up my groceries for me', time_frame: 'Whenever', created_at: '2021-09-26'},
        {id: 2, user_id: 3, title: 'School Pick-up', category: 'Childcare', details: 'Hi there, is there someone locally who can pick up my kids on Tuesday while I am at work', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 3, user_id: 1, title: 'Transport to the Mall', category: 'Transport', details: 'I would like a lift to the mall sometime this week, is anyone going by there at some point? I am flexible', time_frame: 'Tomorrow', created_at: '2021-09-26'},
        {id: 4, user_id: 5, title: 'Support to the Supermarket', category: 'Buddying', details: 'Thursday morning, Kilbirnie please.', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 5, user_id: 4, title: 'Pool Transport', category: 'Transport', details: 'Hello there, I am looking for a neighbour to drop me to Kilbirnie pool', time_frame: 'Ongoing', created_at: '2021-09-26'},
        {id: 6, user_id: 4, title: 'Countdown shop', category: 'Groceries', details: 'Hi everyone, I am looking for someone to pickup my parents groceries as I cant leave the house for a few weeks while I recover from knee surgery', time_frame: 'Ongoing', created_at: '2021-09-26'},
        {id: 7, user_id: 6, title: 'Gardening Help', category: 'Outdoor Tasks', details: 'Hello, I am looking for someone with some gardening skills to help me weed my vege patch.', time_frame: 'Whenever', created_at: '2021-09-26'},
        {id: 8, user_id: 7, title: '', category: 'Indoor Tasks', details: 'Hi, I am seven months pregnant and not able to keep up with the housework. ', time_frame: 'Today', created_at: '2021-09-26'},
        {id: 9, user_id: 8, title: 'Technical Support', category: 'Buddying', details: 'Kia ora, my Grandma is struggling to setup up her computer. Is there anyone locally who has tech skills and some free time?', time_frame: 'This week', created_at: '2021-09-26'},
        {id: 10, user_id: 9, title: 'Cooking for my Dad', category: 'Meal Preparation', details: 'Hi there, I am away for a few weeks and need someone to prepare a meal each Monday for my Dad who lives on his own', time_frame: 'Ongoing', created_at: '2021-09-26'}
      ])
    }
  
