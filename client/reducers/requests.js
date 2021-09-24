import { RECEIVE_REQUESTS, ADD_REQUEST, UPDATE_REQUEST } from '../actions/requests'

const initialState = []

function requestReducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_REQUESTS:
      return action.requests
    
    case ADD_REQUEST:
      return [...state, action.request]

    case UPDATE_REQUEST:
      const newState = state.map(request => {
        return request.id === action.request.id ? action.request : request
      })
      return newState
    
    default:
      return state
  }
}

export default requestReducer
