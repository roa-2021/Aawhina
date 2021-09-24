const path = require('path')
const express = require('express')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

// const userRoutes = require('./routes/userRoutes')
// const authRoutes = require('./routes/authRoutes')
const offerRoutes = require('./routes/offerRoutes')
const requestRoutes = require('./routes/requestRoutes')

// server.use('/api/v1', authRoutes)
// server.use('/api/v1', userRoutes)
server.use('/api/v1/offers', offerRoutes)
server.use('/api/v1/requests', requestRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
