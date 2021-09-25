import request from 'superagent'
const userUrl = '/api/v1'
// const acceptJsonHeader = { Accept: 'application/json' }

export const getUsers = () => {
  return request.get(userUrl)
    .then(response => {
      return response.body
    })
}
export const getUser = (email) => {
  return request
    .get(`${userUrl}/${email}`)
    .then (res => res.body)
}
export const postUser = (newUser) => {
  return request
    .post(userUrl)
    .send (newUser)
    .then (res => res.body)
}
export const deleteUser = (id) => {
  return request 
    .delete(`${userUrl}/${id}`)
    .then(res => res.body)
}

export const updateUser = (id, newDetails) => {
  return request
    .put(`${userUrl}/${id}`)
    .send(newDetails)
    .then(res => res.body)
}