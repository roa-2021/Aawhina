import { RECEIVE_USERS, ADD_USER, UPDATE_USER } from '../actions/users'

const initialState = []

function userReducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.users
    
    case ADD_USER:
      return [...state, action.user]

    case UPDATE_USER:
      const newState = state.map(user => {
        return user.id === action.user.id ? action.user : user
      })
      return newState
    
    default:
      return state
  }
}

export default userReducer
