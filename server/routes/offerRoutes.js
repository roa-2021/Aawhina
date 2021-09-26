const express = require('express')
const router = express.Router()
// const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/offers_db')

// GET /api/v1/offers
router.get('/', (req, res) => {
  db.getAllOffersAndUsers()
    .then(offers => {
      return res.json(offers)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})
// GET /api/v1/offers/:id
router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getOfferById(id)
    .then(offer => {
      return res.json(offer)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})
// POST /api/v1/offers
router.post('/', (req, res) => {
  const offer = req.body
  db.createOffer(offer)
    .then(offer => {
      return res.json(offer)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})
// DEL /api/v1/offers/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteOffer(id)
    .then(() => {
      return res.json(`offer id number ${id} has been deleted`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})
// PUT /api/v1/offers/:id
router.put('/:id', (req, res) => {
  const id = req.params.id
  const newOffer = req.body
  db.editOffer(id, newOffer)
    .then((id) => {
      return res.json(`offer id number ${id} has been updated`)
    })
    .catch(error => {
      res.status(500).json(`error did not work: ${error.message}`)
    })
})

module.exports = router
