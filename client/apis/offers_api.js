import request from 'superagent'
const offersUrl = '/api/v1/offers'
// const acceptJsonHeader = { Accept: 'application/json' }

export const getOffers = () => {
  return request.get(offersUrl)
    .then(response => {
      console.log(response)
      return response.body
    })
}

// function logError (err) {
//   if (err.message === 'Forbidden') {
//     throw new Error('Only the user who added the fruit may update and delete it')
//   } else {
//     // eslint-disable-next-line no-console
//     console.error(
//       'Error consuming the API (in client/api.js):',
//       err.message
//     )
//     throw err
//   }
// }
