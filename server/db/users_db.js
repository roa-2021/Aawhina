// const { generateHash } = require('authenticare/server')
const db = require('./connection')

const getAllUsers = () => {
  return db('users')
}

const getUserByEmail = (email) => {
  return db('users')
    .select()
    .where('email', email)
    .first()
}

const getUserById = (id) => {
  return db('users')
    .select()
    .where('id', id)
    .first()
}

const createUserProfile = (user) => {
  return db('users')
    .insert(user, 'id')
}

const editUserProfile = (id, newUser) => {
  return db('users')
    .where('id', id)
    .update(newUser)
    .then(() => {
      return getUserById(id)
    })
}

const deleteUser = (id) => {
  return db('users')
    .where('id', id)
    .del()
}

// const userExists = (email) => {
//   return db('users')
//     .count('id as n')
//     .where('email', email)
//     .then(count => {
//       return count[0].n > 0
//     })
// }

module.exports = {
  getAllUsers,
  getUserByEmail,
  deleteUser,
  createUserProfile,
  editUserProfile,
  getUserById
}

