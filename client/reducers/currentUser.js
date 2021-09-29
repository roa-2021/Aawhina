import { SET_USER } from '../actions/currentUser'

let initialState = {}

function currentUserReducer (state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return action.user
    
    default:
      return state
  }
}

export default currentUserReducer
