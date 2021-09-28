import { getUser } from '../apis/users_api'

export const SET_USER = 'SET_USER'

// THUNKS

export function setCurrentUserThunk (email) {
  return dispatch => {
    console.log('thunk email', email)
      getUser(email)
      .then(response => { 
        console.log('thunk response', response)
        dispatch(setCurrentUser(response))
      })
  }
}

// ACTION CREATORS

function setCurrentUser(user) {
  return {
    type: SET_USER,
    user
  }
}
