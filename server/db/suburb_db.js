const db = require('./connection')

async function getAllSuburbs () {
  return db('suburb')
}

async function getSuburb (id) {
  return db('suburb')
    .where('suburb.id', id)
    .first()
}

module.exports = {
  getAllSuburbs,
  getSuburb 
}
