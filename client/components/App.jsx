import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Welcome from './Welcome'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Requests from './Requests'
// import Register from './Register'
import Dashboard from './Dashboard'
<<<<<<< HEAD
import Footer from './Footer'
import Nav from './Nav'
||||||| aaab3e3
import nav from './Nav'
=======
>>>>>>> 1c2c59c5266bb1e7c5acd9bbeb5cf22647ad83be
import Login from './Login'
import Logout from './Logout'
import MakeProfile from './MakeProfile'

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
<<<<<<< HEAD
        <Route path='/requests' component={Requests} />
        <Route exact path='/register' component={MakeProfile} />
||||||| aaab3e3
        <Route path='/dashboard' component={nav} />
        <Route exact path='/register' component={MakeProfile} />
=======
        <Route exact path='/makeprofile' component={MakeProfile} />
>>>>>>> 1c2c59c5266bb1e7c5acd9bbeb5cf22647ad83be
        <Route exact path='/dashboard' component={Dashboard} />
        <Route path='/' component={Footer} />
      </Router>
      </Box>
    </>
  )
}

export default connect()(App)
