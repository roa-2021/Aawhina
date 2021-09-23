import request from 'superagent'

const userRoot = '/api/v1'
server.use('/api/v1/offers', offerRoutes)
server.use('/api/v1/requests', requestRoutes)

export const getUsers = () => {
  return request.get(userRoot)
    .then(response => {
      console.log(response)
      return response.body
    })
}
