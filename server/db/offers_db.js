const db = require('./connection')

// many requests to one user
const getAllOffersAndUsers = () => {
  return db('offers')
    .join('users', 'user_id', 'users.id')
    .select('*', 'offers.id AS offer_id')
}

const getOfferById = (id) => {
  return db('offers')
    .join('users', 'user_id', 'users.id')
    .where('offers.id', id)
    .select('*', 'offers.id AS offer_id')
    .first()
}
// authorizeupdate required
const deleteOffer = (id) => {
  return db('offers')
    .where('id', id)
    .del()
}
// authorizeupdate required
const createOffer = (offer) => {
  // fruit.added_by_user = user.id
  return db('offers')
    .insert(offer, 'id')
    .then(offerId => {
      return getOfferById(offerId[0])
    })
}
// authorizeupdate required
const editOffer = (id, newOffer) => {
  return db('offers')
    .where('id', id)
    .update(newOffer)
}

// function authorizeUpdate (fruit, user) {
//   if (fruit.added_by_user !== user.id) {
//     throw new Error('Unauthorized')
//   }
// }

module.exports = {
  getAllOffersAndUsers,
  getOfferById,
  deleteOffer,
  createOffer,
  editOffer
}
