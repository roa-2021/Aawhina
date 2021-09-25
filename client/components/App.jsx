import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import MakeProfile from './MakeProfile'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'
import MakeRequest from './MakeRequest'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/' component={Welcome} />
        <Route exact path='/makeprofile' component={MakeProfile} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/requests/new' component={MakeRequest} />
      </Router>
    </>
  )
}

export default App
