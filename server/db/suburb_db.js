const db = require('./connection')

function getAllSuburbs () {
  return db('suburb')

    .then(response => {
      suburbsArr = []
      response.map(suburb => {

        newSuburb = convertNeighboursStringToArray(suburb)
        
        suburbsArr.push(newSuburb)
      })
      return suburbsArr
    })

}

function getSuburb (id) {
  return db('suburb')
    .where('suburb.id', id)
    .first()
    .then(suburb => convertNeighboursStringToArray(suburb))
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
