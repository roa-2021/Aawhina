import { getUsers, getUser, postUser, updateUser, deleteUser} from '../apis/users_api'
import {setCurrentUserThunk} from './currentUser'

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
    console.log('postuserthunk', user)
    postUser(user)
      .then(response => {
        dispatch(addUser(response))
        dispatch(setCurrentUserThunk(user.email))
      })
  }
}

export function updateUserThunk (user) {
  return dispatch => {
    updateUser(user.id, user)
      .then(response => {
        dispatch(updateUserAction(response))
        dispatch(setCurrentUserThunk(user.email))
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