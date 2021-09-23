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

router.post('/', (req, res) => {
  const request = req.body
  db.createRequest(request)
    .then(request => {
      return res.json(request)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteRequest(id)
    .then(() => {
      return res.json(`request id number ${id} has been deleted`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const newRequest = req.body
  db.editRequest(id, newRequest)
    .then((id) => {
      return res.json(`request id number ${id} has been updated`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

module.exports = router
