import request from 'superagent'

const offersRoot = '/api/v1/offers'

export const getOffers = () => {
  return request.get(offersRoot)
    .then(response => {
      console.log(response)
      return response.body
    })
}
