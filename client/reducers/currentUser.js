import { SET_USER } from '../actions/currentUser'

const initialState = {}

function currentUserReducer (state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return action.user
    
    default:
      return state
  }
}

export default currentUserReducer
