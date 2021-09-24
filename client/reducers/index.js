import { combineReducers } from 'redux'

import requestReducer from './requests'
import offerReducer from './offers'

export default combineReducers({
  requests: requestReducer,
  offers: offerReducer
})
