import request from 'superagent'
const suburbsUrl = '/api/v1/suburbs'
// const acceptJsonHeader = { Accept: 'application/json' }

export const getSuburbs = () => {
  return request.get(suburbsUrl)
    .then(response => {
      return response.body
    })
}

export const getSuburb = (id) => {
  return request
    .get(`${suburbsUrl}/${id}`)
    .then(res => res.body)
}
