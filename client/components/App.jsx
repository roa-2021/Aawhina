import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'


import Welcome from './Welcome'
import Register from './Register'

const App = () => {
  return (
    <>

      <Router>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Welcome} />
      </Router>
    </>
  )
}

export default App
