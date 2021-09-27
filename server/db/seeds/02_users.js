exports.seed = (knex) => {
  // Deletes ALL existing entries
  // return knex('users').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Jo', last_name: 'T', email: 'jo@gmail.com', suburb_id: 1, bio: 'Hi, I"m Jo!', gender: 'female', spoken_languages: 'English', image: ''},
        { id: 2, first_name: 'Phill', last_name: 'L-M', email: 'phill@gmail.com', suburb_id: 3, bio: 'Hi, I"m Phill!', gender: 'male', spoken_languages: 'English', image: ''},
        { id: 3, first_name: 'Zoe', last_name: 'J', email: 'zoe@gmail.com', suburb_id: 3, bio: 'Hi, I"m Zoe!', gender: 'gender non conforming', spoken_languages: 'English', image: ''},
        { id: 4, first_name: 'Matt', last_name: 'S', email: 'matt@gmail.com', suburb_id: 1, bio: 'Hi, I"m Matt!', gender: 'male', spoken_languages: 'English', image: ''}
      ])
    }
  //   )
  //  }