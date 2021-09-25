import request from 'superagent'
const requestsUrl = '/api/v1/requests'
// const acceptJsonHeader = { Accept: 'application/json' }

export const getRequests = () => {
  return request.get(requestsUrl)
    .then(response => {
      console.log(response)
      return response.body
    })
}

export const getRequest = (id) => {
  return request
    .get(`${requestsUrl}/${id}`)
    .then(res => res.body)
}

export const postRequest = (newRequest) => {
  return request
    .post(requestsUrl)
    .send (newRequest)
    .then (res => res.body)
}

export const deleteRequest = (id) => {
  return request 
    .delete(`${requestsUrl}/${id}`)
    .then(res => res.body)
}

export const updateRequest = (id, newDetails) => {
  return request
    .put(`${requestsUrl}/${id}`)
    .send(newDetails)
    .then(res => res.body)
}