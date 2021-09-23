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
const deleteUser = () => {
  return db('users')
}
// TODO //
const createUserProfile = () => {
  return db('users')
}
// TODO //
const editUserProfile = () => {
  return db('users')
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
