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
// TODO //
const deleteUser = (id) => {
  return db('users')
    .where('id', id)
    .del()
}
// TODO //
const createUserProfile = (user) => {
  return db('users')
    .insert(user, 'id')
    .then(userEmail => {
      return getUserByEmail(userEmail[0])
    })
}
// TODO //
const editUserProfile = (id, newUser) => {
  return db('users')
    .where('id', id)
    .update(newUser)
}

const userExists = (email) => {
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

module.exports = {
  getAllUsers,
  getUserByEmail,
  deleteUser,
  createUserProfile,
  editUserProfile,
  userExists
}
