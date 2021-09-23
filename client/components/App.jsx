import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path='/' component={Welcome} />
      </Router>
    </>
  )
}

export default connect()(App)
