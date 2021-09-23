exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => Promise.all([

    ]))
    .then (([joHash, phillHash, zoeHash, mattHash]) =>
      // Inserts seed entries
      knex('users').insert([
        { id: 1, first_name: 'Jo', last_name: 'T', email: 'jo@gmail.com', hash: 'joHash', suburb_id: '', bio: 'Hi, I"m Jo!', gender: 'female', image: ''},
        { id: 2, first_name: 'Phill', last_name: 'L-M', email: 'phill@gmail.com', hash: 'phillHash', suburb_id: '', bio: 'Hi, I"m Phill!', gender: 'male', image: ''},
        { id: 3, first_name: 'Zoe', last_name: 'J', email: 'zoe@gmail.com', hash: 'zoeHash', suburb_id: '', bio: 'Hi, I"m Zoe!', gender: 'gender non conforming', image: ''},
        { id: 4, first_name: 'Matt', last_name: 'S', email: 'matt@gmail.com', hash: 'mattHash', suburb_id: '', bio: 'Hi, I"m Matt!', gender: 'male', image: ''}
      ])
     )
    }