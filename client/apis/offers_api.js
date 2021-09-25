import request from 'superagent'
const offersUrl = '/api/v1/offers'
// const acceptJsonHeader = { Accept: 'application/json' }

export const getOffers = () => {
  return request.get(offersUrl)
    .then(response => {
      return response.body
    })
}

export const getOffer = (id) => {
  return request
    .get(`${offersUrl}/${id}`)
    .then(res => res.body)
}

export const postOffer = (newOffer) => {
  return request
    .post(offersUrl)
    .send (newOffer)
    .then (res => res.body)
}

export const deleteOffer = (id) => {
  return request 
    .delete(`${offersUrl}/${id}`)
    .then(res => res.body)
}

export const updateOffer = (id, newDetails) => {
  return request
    .put(`${offersUrl}/${id}`)
    .send(newDetails)
    .then(res => res.body)
}