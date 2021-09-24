const express = require('express')
const router = express.Router()
// const { getTokenDecoder } = require('authenticare/server')

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
// to update with auth
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
// to update with auth
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
