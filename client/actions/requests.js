// import { getRequests, postRequest, updateRequest } from '../apis/requests_api'

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS'
export const ADD_REQUEST = 'ADD_REQUEST'
export const UPDATE_REQUEST = 'UPDATE_REQUEST'

// THUNKS

export function getRequestsThunk () {
  return dispatch => {
    getRequests()
      .then(response => {
        dispatch(setRequests(response))
      })
  }
}

export function postRequestThunk (request) {
  return dispatch => {
    postRequest(request)
      .then(response => {
        dispatch(addRequest(response))
      })
  }
}

export function updateRequestThunk (request) {
  return dispatch => {
    updateRequest(request)
      .then(response => {
        dispatch(updateRequestAction(response))
      })
  }
}

// ACTION CREATORS

function setRequests(requests) {
  return {
    type: RECEIVE_REQUESTS,
    requests
  }
}

function addRequest(request) {
  return {
    type: ADD_REQUEST,
    request
  }
}

function updateRequestAction (request) {
  return {
    type: UPDATE_REQUEST,
    request
  }
}