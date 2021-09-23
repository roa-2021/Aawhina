const express = require('express')
const router = express.Router()
const { applyAuthRoutes } = require('authenticare/server')

const { userExists, getUserByEmail, createUserProfile } = require('../db/users_db')

applyAuthRoutes(router, {
  userExists,
  getUserByEmail,
  createUserProfile
})

module.exports = router
