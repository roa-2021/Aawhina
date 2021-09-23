const db = require('./connection')
// many requests to one user
const getAllRequestsAndUsersAndSuburbs = () => {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('*', 'requests.id AS request_id', 'suburb.name AS suburb_name')
}
// TODO //
const getRequestById = (id) => {
  return db('requests')
    .where('requests.id', id)
    .first()
}
// TODO //
const deleteRequest = (id) => {
  return db('requests')
    .where('id', id)
    .del()
}
// TODO //
const createRequest = (request) => {
  return db('requests')
    .insert(request, 'id')
    .then(requestId => {
      return getRequestById(requestId[0])
    })
}

const editRequest = (id, newRequest) => {
  return db('requests')
    .where('id', id)
    .update(newRequest)
}

module.exports = {
  deleteRequest,
  getRequestById,
  createRequest,
  editRequest,
  getAllRequestsAndUsersAndSuburbs
}
