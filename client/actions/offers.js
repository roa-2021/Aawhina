import { getOffers, getOffer, postOffer, deleteOffer, updateOffer } from '../apis/offers_api'

export const RECEIVE_OFFERS = 'RECEIVE_OFFERS'
export const ADD_OFFER = 'ADD_OFFER'
export const UPDATE_OFFER = 'UPDATE_OFFER'

// THUNKS

export function getOffersThunk () {
  return dispatch => {
    getOffers()
      .then(response => {
        dispatch(setOffers(response))
      })
  }
}

export function postOfferThunk (offer) {
  return dispatch => {
    postOffer(offer)
      .then(response => {
        dispatch(addOffer(response))
      })
  }
}

export function updateOfferThunk (offer) {
  return dispatch => {
    updateOffer(offer.id, offer)
      .then(response => {
        dispatch(updateOfferAction(response))
      })
  }
}

export function deleteOfferThunk (offerId) {
  return dispatch => {
    deleteOffer(offerId)
      .then(() => dispatch(getOffersThunk()))
  }
}

// ACTION CREATORS

function setOffers(offers) {
  return {
    type: RECEIVE_OFFERS,
    offers
  }
}

function addOffer(offer) {
  return {
    type: ADD_OFFER,
    offer
  }
}

function updateOfferAction (offer) {
  return {
    type: UPDATE_OFFER,
    offer
  }
}