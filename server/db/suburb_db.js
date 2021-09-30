const db = require('./connection')

function getAllSuburbs () {
  return db('suburb')
    .then(response => {
      suburbsArr = []
      response.map(suburb => {
        convertNeighboursStringToArray(response)
        suburbsArr.push(newSuburb)
      })
      return suburbsArr
    })
}

function getSuburb (id) {
  return db('suburb')
    .where('suburb.id', id)
    .first()
    .then(response => {
      convertNeighboursStringToArray(response)
    })
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
