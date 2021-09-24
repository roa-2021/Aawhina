import { RECEIVE_OFFERS, ADD_OFFER, UPDATE_OFFER } from '../actions/offers'

const initialState = []

function offerReducer (state = initialState, action) {
  switch(action.type) {
    case RECEIVE_OFFERS:
      return action.offers
    
    case ADD_OFFER:
      return [...state, action.offer]

    case UPDATE_OFFER:
      const newState = state.map(offer => {
        return offer.id === action.offer.id ? action.offer : offer
      })
      return newState
    
    default:
      return state
  }
}

export default offerReducer
