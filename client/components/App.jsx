import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import Register from './Register'

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
