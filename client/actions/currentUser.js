import { getUser } from '../apis/users_api'

export const SET_USER = 'SET_USER'

// THUNKS

export function setCurrentUserThunk (email) {
  return dispatch => {
      getUser(email)
      .then(response => { 
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
