const express = require('express')
const router = express.Router()

const db = require('../db/suburb_db')

// GET /api/v1/suburbs
router.get('/', (req, res) => {
  db.getAllSuburbs()
  .then (suburbs => res.json(suburbs))
  .catch ((err) => {
    res.status(500).send(err.message)
  })
})

// GET /api/v1/suburbs/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getSuburb(id)
    .then(suburb => {
      return res.json(suburb)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})
module.exports = router
