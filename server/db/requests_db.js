const db = require('./connection')
// many requests to one user
const getAllRequestsAndUsersAndSuburbs = () => {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    // .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('*', 'requests.id AS request_id')
}
// TODO //
const getRequestById = () => {
  return db('requests')
}
// TODO //
const deleteRequest = () => {
  return db('requests')
}
// TODO //
const createRequest = () => {
  return db('requests')
}
// TODO //
const editRequest = () => {
  return db('requests')
}

module.exports = {
  deleteRequest,
  getRequestById,
  createRequest,
  editRequest,
  getAllRequestsAndUsersAndSuburbs
}
