import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// import Home from './Home'
// import Register from './Register'
// import Login from './Login'
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
