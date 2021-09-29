import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { getOffersThunk} from '../actions/offers'
import { getRequestsThunk} from '../actions/requests'
import { getUsersThunk} from '../actions/users'
import { setCurrentUserThunk } from '../actions/currentUser'
import { connect } from 'react-redux'

const LaunchData = ({ dispatch }) => {
  const { user } = useAuth0()
  
  useEffect(() => {
    dispatch(getUsersThunk())
    dispatch(getRequestsThunk())
    dispatch(getOffersThunk())
  }, [])

  useEffect(() => {
    if (user) {
      dispatch(setCurrentUserThunk(user.email))
    }
  }, [user])

  return null
}

export default connect()(LaunchData)