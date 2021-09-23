const express = require('express')
const router = express.Router()

const db = require('../db/offers_db')

router.get('/', (req, res) => {
  return db.getAllOffersAndUsers()
    .then(offers => {
      return res.json(offers)
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

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

module.exports = router
