// eslint-disable-next-line import/named
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return cartAdder(state, action.id, action.name)
    case REMOVE_FROM_CART:
      console.log(state)
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

export default cartReducer

const cartAdder = (state, id, name) => {
  const inCart = state.filter(cartItem => cartItem.id === id)
  if (inCart.length) {
    const newCart = state.map(cartItem => {
      if (cartItem.id === id) {
        cartItem.quantity += 1
        return cartItem
      } else {
        return cartItem
      }
    })
    return newCart
  } else {
    return [...state, {
      id,
      name,
      quantity: 1
    }]
  }
}
