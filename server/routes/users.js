const express = require('express')
const router = express.Router()
const { applyAuthRoutes } = require('authenticare/server')

const db = require('../db/users_db')

router.get('/', (req, res) => {
  return db.getAllUsers()
    .then(users => {
      return res.json(users)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
