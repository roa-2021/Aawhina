const db = require('./connection')

// many requests to one user
const getAllRequestsAndUsersAndSuburbs = () => {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('*', 'requests.id AS request_id', 'suburb.name AS suburb_name')
}

const getRequestById = (id) => {
  return db('requests')
    .where('requests.id', id)
    .first()
}
// authorizeupdate required
const deleteRequest = (id) => {
  return db('requests')
    .where('id', id)
    .del()
}

const createRequest = (request) => {
  // fruit.added_by_user = user.id
  return db('requests')
    .insert(request, 'id')
    .then(requestId => {
      return getRequestById(requestId[0])
    })
}
// authorizeupdate required
const editRequest = (id, newRequest) => {
  return db('requests')
    .where('id', id)
    .update(newRequest)
}

// function authorizeUpdate (fruit, user) {
//   if (fruit.added_by_user !== user.id) {
//     throw new Error('Unauthorized')
//   }
// }

module.exports = {
  deleteRequest,
  getRequestById,
  createRequest,
  editRequest,
  getAllRequestsAndUsersAndSuburbs
}
