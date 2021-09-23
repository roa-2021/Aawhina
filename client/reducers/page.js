// eslint-disable-next-line import/named
import { NAVIGATE } from '../actions'

const initialState = 'listing'

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.activePage
    default:
      return state
  }
}

export default pageReducer
