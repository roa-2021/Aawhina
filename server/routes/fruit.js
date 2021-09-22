const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  return db.getAllFruit()
    .then(fruit => {
      return res.json(fruit)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
