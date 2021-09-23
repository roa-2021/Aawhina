const express = require('express')
const router = express.Router()
// const { applyAuthRoutes } = require('authenticare/server')

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

router.get('/:email', (req, res) => {
  const email = req.params.email
  return db.getUserByEmail(email)
    .then(user => {
      return res.json(user)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/', (req, res) => {
  const user = req.body
  db.createUserProfile(user)
    .then(user => {
      return res.json(user)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

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

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const newUser = req.body
  db.editUserProfile(id, newUser)
    .then((id) => {
      return res.json(`user id number ${id} has been updated`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

module.exports = router
