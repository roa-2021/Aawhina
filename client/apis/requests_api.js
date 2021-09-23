import request from 'superagent'

const requestsRoot = '/api/v1/requests'

export const getRequests = () => {
  return request.get(requestsRoot)
    .then(response => {
      console.log(response)
      return response.body
    })
}
