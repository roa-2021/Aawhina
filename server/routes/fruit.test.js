const request = require('supertest')

const server = require('../server')

jest.mock('../db/db', () => {
  return {
    getAllFruit: () => Promise.resolve([
      { id: 1, name: 'Dragonfruit' },
      { id: 2, name: 'Testfruit' }
    ])
  }
})


  test('READ all: /api/v1/fruit returns all fruit', () => {
    const expected = 2
    return request(server)
      .get('/api/v1/fruit')
      .then(fruit => {
        const actual = fruit.body.length
        expect(actual).toEqual(expected)
        return null
      })
  })
