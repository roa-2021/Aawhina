import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import Register from './Register'
import Dashboard from './Dashboard'
import nav from './Nav'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Welcome} />
        <Route path='/dashboard' component={nav} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </>
  )
}

export default App
