import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import MakeProfile from './MakeProfile'
import Dashboard from './Dashboard'
import nav from './Nav'
import Login from './Login'
import Logout from './Logout'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/' component={Welcome} />
        <Route path='/dashboard' component={nav} />
        <Route exact path='/register' component={MakeProfile} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </>
  )
}

export default App
