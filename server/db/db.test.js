/* eslint-disable promise/no-nesting */
const db = require('./db')
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV
const testDb = knex(config[env])

beforeAll(() => {
  return testDb.migrate.latest()
    .then(() => {
      return testDb.seed.run()
    })
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Fruit database tests', () => {
  test('READ all: select all fruit', () => {
    const expected = 3
    return db.getAllFruit(testDb)
      .then(fruit => {
        const actual = fruit.length
        return expect(actual).toEqual(expected)
      })
  })

})
