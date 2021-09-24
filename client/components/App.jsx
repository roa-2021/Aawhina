import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import CssBaseline from '@mui/material/CssBaseline'
import Requests from './Requests'
import Register from './Register'
import Dashboard from './Dashboard'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <CssBaseline/>
      <Router>
        <Route exact path='/register' component={Register} />
        <Route exact path='/' component={Welcome} />
        <Route path='/requests' component={Requests} />
        <Route path='/dashboard' component={Nav} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    </>
  )
}

export default connect()(App)
