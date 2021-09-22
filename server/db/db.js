const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


const getAllFruit = (db = connection) => {
  return db('fruit')
}

module.exports = {
  getAllFruit
}
