import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getOffersThunk} from '../actions/offers'
import { getRequestsThunk} from '../actions/requests'
import { getUsersThunk} from '../actions/users'
import Welcome from './Welcome'
import MakeProfile from './MakeProfile'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'

const App = (props) => {
  const { dispatch } = props

  useEffect(() => {
    dispatch(getOffersThunk())
    dispatch(getRequestsThunk())
    dispatch(getUsersThunk())
  
  }, [])
  return (
    <>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/makeprofile' component={MakeProfile} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </>
  )
}


export default connect()(App)
