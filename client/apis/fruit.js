import request from 'superagent'

export const getFruit = () => {
  return request.get('/api/v1/fruit')
    .then(response => {
      console.log(response)
      return response.body
    })
}
