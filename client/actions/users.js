import { getUsers, postUser, updateUser } from '../apis/users_api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'

// THUNKS

export function getUsersThunk () {
  return dispatch => {
    getUsers()
      .then(response => {
        dispatch(setUsers(response))
      })
  }
}

export function postUserThunk (user) {
  return dispatch => {
    postUser(user)
      .then(response => {
        dispatch(addUser(response))
      })
  }
}

export function updateUserThunk (user) {
  return dispatch => {
    updateUser(user)
      .then(response => {
        dispatch(updateUserAction(response))
      })
  }
}

// ACTION CREATORS

function setUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function addUser(user) {
  return {
    type: ADD_USER,
    user
  }
}

function updateUserAction (user) {
  return {
    type: UPDATE_USER,
    user
  }
}