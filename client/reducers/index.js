import { combineReducers } from 'redux'

import cartReducer from './cart'
import pageReducer from './page'

export default combineReducers({
  cart: cartReducer,
  activePage: pageReducer
})
