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

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getRequestById(id)
    .then(request => {
      return res.json(request)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
