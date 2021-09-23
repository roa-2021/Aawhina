import { getRequests, postRequest } from '../apis/requests_api'

export const RECEIVE_REQUESTS = 'RECEIVE_REQUESTS'
export const ADD_REQUEST = 'ADD_REQUEST'

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

// ACTION CREATORS

function setRequests(requests) {
  return {
    type: RECEIVE_REQUESTS,
    requests
  }
}

function addRequest (request) {
  return {
    type: ADD_REQUEST,
    request
  }
}