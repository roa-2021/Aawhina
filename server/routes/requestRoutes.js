const express = require('express')
const router = express.Router()
// const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/requests_db')

// GET /api/v1/requests
router.get('/', async (req, res) => {
  try {
    const requests = await db.getAllRequestsAndUsersAndSuburbs()
    res.json({ requests })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

// GET /api/v1/requests/:id
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
// POST /api/v1/requests
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

// PUT /api/v1/requests/:id
router.put('/:id', (req, res) => {
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

// DELETE /api/v1/requests/:id
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







// router.post('/', getTokenDecoder(), async (req, res) => {
//   const request = req.body
//   const user = req.user
//   if (req.user) {
//     alert('username:', req.user.username)
//   } else {
//     alert('authentication token not provided')
//   }
//   try {
//     const requests = await db.createRequest(request, user)
//     res.json({ requests })
//   } catch (error) {
//     res.status(500).json(`error did not work: ${error.message}`)
//   }
// })

// router.delete('/:id', getTokenDecoder(), async (req, res) => {
//   const id = req.params.id
//   const user = req.user
//   if (req.user) {
//     alert('username:', req.user.username)
//   } else {
//     alert('authentication token not provided')
//   }
//   try {
//     const requests = await db.deleteRequest(id, user)
//     res.json({ requests })
//   } catch (err) {
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the fruit may delete it'
//       )
//     }
//     res.status(500).send(err.message)
//   }

// router.put('/:id', getTokenDecoder(), async (req, res) => {
//   const updatedRequest = req.body
//   const user = req.user
//   if (req.user) {
//     alert('username:', req.user.username)
//   } else {
//     alert('authentication token not provided')
//   }
//   try {
//     const requests = await db.editRequest(updatedRequest, user)
//     res.json({ requests })
//   } catch (err) {
//     if (err.message === 'Unauthorized') {
//       return res.status(403).send(
//         'Unauthorized: Only the user who added the fruit may update it'
//       )
//     }
//     res.status(500).send(err.message)
//   }
// })

module.exports = router
