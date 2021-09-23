export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export function addToCart (id, name) {
  return {
    type: ADD_TO_CART,
    id,
    name
  }
}

export function removeFromCart (id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}
