const express = require('express')
const router = express.Router()
const db = require('../db/users_db')

// GET /api/v1
router.get('/', (req, res) => {
  db.getAllUsers()
    .then(users => {
      return res.json(users)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

// GET /api/v1/:email
router.get('/:email', (req, res) => {
  const email = req.params.email
  return db.getUserByEmail(email)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('No user profile created')
    })
})
// POST /api/v1
router.post('/', (req, res) => {
  const user = req.body
  db.createUserProfile(user)
    .then(idarray => {
      user.id = idarray[0]
      res.json(user)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

// DEL /api/v1/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteUser(id)
    .then(() => {
      return res.json(`user id number ${id} has been deleted`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

// PUT /api/v1/:id
router.put('/:id', (req, res) => {
  const id = req.params.id
  const newUser = req.body
  db.editUserProfile(id, newUser)
    .then((user) => {
      return res.json(user)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

module.exports = router
