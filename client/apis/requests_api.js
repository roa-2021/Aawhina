import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const requestsUrl = '/api/v1/requests'
const acceptJsonHeader = { Accept: 'application/json' }

export const getRequests = () => {
  return request.get(requestsUrl)
    .set(acceptJsonHeader)
    .then(response => {
      console.log(response)
      return response.body
    })
    .catch(logError)
}

export const getOneRequest = (id) => {
  return request.get(`${requestsUrl}/${id}`)
    .set(acceptJsonHeader)
    .then(response => {
      console.log(response)
      return response.body
    })
    .catch(logError)
}

export function addRequest (request) {
  return request.post(requestsUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(request)
    .then(res => res.body.requests)
    .catch(logError)
}

export function updateRequest (request) {
  return request.put(requestsUrl)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(request)
    .then(res => res.body.requests)
    .catch(logError)
}

export function delRequest (id) {
  return request.delete(`${requestsUrl}/${id}`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(res => res.body.requests)
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the request may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/apis/requests_api.js):',
      err.message
    )
    throw err
  }
}
