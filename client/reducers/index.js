import { combineReducers } from 'redux'

import requestReducer from './requests'
import offerReducer from './offers'
import usersReducer from './users'

export default combineReducers({
  requests: requestReducer,
  offers: offerReducer,
  users: usersReducer
})
