const db = require('./connection')

 function getAllSuburbs () {
  return db('suburb')
}

 function getSuburb (id) {
  return db('suburb')
    .where('suburb.id', id)
    .first()
}

module.exports = {
  getAllSuburbs,
  getSuburb 
}
