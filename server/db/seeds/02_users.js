exports.seed = (knex) => {
  // Deletes ALL existing entries
  // return knex('users').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, first_name: 'Jo', last_name: 'Tree', email: 'jo@email.com', suburb_id: 1, bio: 'Hi, I"m Jo!', gender: 'prefer not to say', spoken_languages: 'English', image: ''},
        { id: 2, first_name: 'Phill', last_name: 'L-m', email: 'phill@email.com', suburb_id: 5, bio: 'Hi, I"m Phill!', gender: 'male', spoken_languages: 'English', image: ''},
        { id: 3, first_name: 'Zoe', last_name: 'J', email: 'zoe@email.com', suburb_id: 3, bio: 'Hi, I"m Zoe!', gender: 'gender non conforming', spoken_languages: 'English', image: ''},
        { id: 4, first_name: 'Matt', last_name: 'Searle', email: 'matt@email.com', suburb_id: 6, bio: 'Hi, I"m Matt!', gender: 'male', spoken_languages: 'English', image: ''},
        { id: 5, first_name: 'Sophie', last_name: 'T', email: 'sophie@email.com', suburb_id: 1, bio: 'Hi, I"m Sophie!', gender: 'female', spoken_languages: 'English', image: ''},
        { id: 6, first_name: 'Jemima', last_name: 'L', email: 'jemima@email.com', suburb_id: 85, bio: 'Hi, I"m Jemima!', gender: 'female', spoken_languages: 'English', image: ''},
        { id: 7, first_name: 'Tom', last_name: 'T', email: 'tom@email.com', suburb_id: 68, bio: 'Hi, I"m Tom!', gender: 'male', spoken_languages: 'English', image: ''},
        { id: 8, first_name: 'Lachie', last_name: 'S', email: 'lachie@email.com', suburb_id: 71, bio: 'Hi, I"m Lachie!', gender: 'male', spoken_languages: 'English', image: ''},
        { id: 9, first_name: 'Olivia', last_name: 'S', email: 'olivia@email.com', suburb_id: 97, bio: 'Hi, I"m Olivia!', gender: 'female', spoken_languages: 'English', image: ''},
        { id: 10, first_name: 'Catherine', last_name: 'C', email: 'catherine@email.com', suburb_id: 22, bio: 'Hi, I"m Catherine!', gender: 'female', spoken_languages: 'English', image: ''},


        
      ])
    }
  //   )
  //  }