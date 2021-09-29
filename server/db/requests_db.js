const db = require('./connection')

// many requests to one user
 function getAllRequestsAndUsersAndSuburbs () {
  return db('requests')
    .join('users', 'user_id', 'users.id')
    .join('suburb', 'users.suburb_id', 'suburb.id')
    .select('*', 'requests.id AS id ', 'users.id AS user_id', 'suburb.id AS suburb_id', 'suburb.name AS suburb_name')
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

 function createRequest (request) {
  return db('requests')
    .insert(request, 'id')
    // .then(requestId => {
    //   return getRequestById(requestId[0])
    // })
}

 function editRequest (newRequest, user) {
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
