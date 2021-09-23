const RECEIVE_REQUESTS = 'RECEIVE REQUESTS'
const REQUEST_REQUESTS = 'REQUEST REQUESTS'

function requests (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_REQUESTS:
      return action.requests
    
    case REQUEST_REQUESTS:
      return null
    
    default:
      return state
  }
}