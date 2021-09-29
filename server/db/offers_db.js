const db = require('./connection')

// many requests to one user
const getAllOffersAndUsers = () => {
  return db('offers')
    .join('users', 'user_id', 'users.id')
    .select('*', 'offers.id as id', 'users.id AS user_id')
}

const getOfferById = (id) => {
  return db('offers')
    .join('users', 'user_id', 'users.id')
    .where('offers.id', id)
    .select('*', 'offers.id AS offer_id')
    .first()
}

const deleteOffer = (id) => {
  return db('offers')
    .where('id', id)
    .del()
}

const createOffer = (offer) => {
  return db('offers')
    .insert(offer, 'id')
    // .then(offerId => {
    //   return getOfferById(offerId[0])
    // })
}

const editOffer = (id, newOffer) => {
  return db('offers')
    .where('id', id)
    .update(newOffer)
}


module.exports = {
  getAllOffersAndUsers,
  getOfferById,
  deleteOffer,
  createOffer,
  editOffer
}
