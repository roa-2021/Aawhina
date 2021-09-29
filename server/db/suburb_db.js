const db = require('./connection')

 function getAllSuburbs () {
  return db('suburb')
    .then(response => {
      suburbsArr = []
      response.map(suburb => {
        newSuburb = {
          ...suburb,
          neighbours: suburb.neighbours.split(',')
        }
        newSuburb.neighbours.map((s, i) => {
          newSuburb.neighbours[i] = parseInt(s)
        })
        suburbsArr.push(newSuburb)
      })
      return suburbsArr
    })
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
