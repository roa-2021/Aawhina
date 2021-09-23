import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'


import Welcome from './Welcome'
import Register from './Register'
import Dashboard from './Dashboard'
import nav from './Nav'
import Offers from './Offers'
import Requests from './requests'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/' component={Welcome} />
        <Route path='/dashboard' component={nav} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/offers' component={Offers} />
        <Route exact path='/requests' component={Requests} />
      </Router>
    </>
  )
}

export default App
