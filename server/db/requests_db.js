const db = require('./connection')

// many requests to one user
async function getAllRequestsAndUsersAndSuburbs () {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    // .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('requests.*', 'users.first_name', 'users.last_name', 'users.suburb_id', 'users.image')
}
//, 'suburb.name AS suburb_name'

async function getRequestById (id) {
  return db('requests')
    .where('requests.id', id)
    .first()
}

async function deleteRequest (id, user) {
    return db('requests')
      .where('id', id)
      .del()
  }

async function createRequest (request, user) {
  // request.added_by_user = user.id
  return db('requests')
    .insert(request, 'id')
    .then(requestId => {
      return getRequestById(requestId[0])
    })
}

async function editRequest (newRequest, user) {
  return db('requests')
  .where('id', id)
  .update(newRequest)
}

// function authorizeUpdate (request, user) {
//   if (request.added_by_user !== user.id) {
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
