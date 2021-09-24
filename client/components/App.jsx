import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Requests from './Requests'
import Register from './Register'
import Dashboard from './Dashboard'
import Footer from './Footer'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <CssBaseline/>
      <Nav />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignContent: 'flex-start'
      }}
      >
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/' component={Welcome} />
        <Route path='/requests' component={Requests} />
        <Route exact path='/register' component={MakeProfile} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/' component={Footer} />
      </Router>
      </Box>
    </>
  )
}

export default connect()(App)
