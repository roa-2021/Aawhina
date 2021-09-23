import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'


import Welcome from './Welcome'
// import Register from './Register'
import CssBaseline from '@mui/material/CssBaseline'
import Requests from './Requests'

const App = () => {
  return (
    <>
      <CssBaseline/>
      <Router>
        <Route exact path='/' component={Welcome} />
        <Route path='/requests' component={Requests} />
      </Router>
    </>
  )
}

// export default connect()(App)
export default App
