const path = require('path')

const envPath = path.join(__dirname, '.env')
require('dotenv').config({ path: envPath })

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
