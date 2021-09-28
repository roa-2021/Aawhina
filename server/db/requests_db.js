const db = require('./connection')

// many requests to one user
 function getAllRequestsAndUsersAndSuburbs () {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('requests.*', 'requests.id AS request_id', 'users.first_name', 'users.last_name', 'users.suburb_id', 'users.id as user_id', 'users.image', 'suburb.id AS suburb_id', 'suburb.name AS suburb_name', 'suburb.neighbours')
}


 function getRequestById (id) {
  return db('requests')
    .where('requests.id', id)
    .first()
}

 function deleteRequest (id, user) {
    return db('requests')
      .where('id', id)
      .del()
  }

 function createRequest (request, user) {
  // request.added_by_user = user.id
  return db('requests')
    .insert(request, 'id')
    .then(requestId => {
      return getRequestById(requestId[0])
    })
}

 function editRequest (newRequest, user) {
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
