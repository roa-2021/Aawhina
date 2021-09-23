const express = require('express')
const router = express.Router()

const db = require('../db/requests_db')

router.get('/', (req, res) => {
  return db.getAllRequestsAndUsersAndSuburbs()
    .then(requests => {
      return res.json(requests)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
