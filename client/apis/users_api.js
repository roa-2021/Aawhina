import request from 'superagent'

const userRoot = '/api/v1'

export const getUsers = () => {
  return request.get(userRoot)
    .then(response => {
      console.log(response)
      return response.body
    })
}
