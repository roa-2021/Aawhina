const path = require('path')
const express = require('express')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

const userRoutes = require('./routes/users')
const offerRoutes = require('./routes/offers')
const requestRoutes = require('./routes/requests')

server.use('/api/v1', userRoutes)
server.use('/api/v1/offers', offerRoutes)
server.use('/api/v1/requests', requestRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
