import { combineReducers } from 'redux'

import requestReducer from './requests'
import offerReducer from './offers'
import usersReducer from './users'
import currentUserReducer from './currentUser'

export default combineReducers({
  requests: requestReducer,
  offers: offerReducer,
  users: usersReducer,
  currentUser: currentUserReducer
})
