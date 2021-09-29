const db = require('./connection')

function getAllSuburbs () {
  return db('suburb')
}

function getSuburb (id) {
  return db('suburb')
    .where('suburb.id', id)
    .first()
}

const convertNeighboursStringToArray = (suburb) => {
  newSuburb = {
    ...suburb,
    neighbours: suburb.neighbours.split(',')
  }
  newSuburb.neighbours.map((s, i) => {
    newSuburb.neighbours[i] = parseInt(s)
  })
  return newSuburb
}

module.exports = {
  getAllSuburbs,
  getSuburb 
}
