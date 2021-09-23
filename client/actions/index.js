export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const NAVIGATE = 'NAVIGATE'

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

export function navigate (activePage) {
  return {
    type: NAVIGATE,
    activePage: activePage // 'listing' or 'cart'
  }
}
