import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'

import Dashboard from './Dashboard'
import Footer from './Footer'
import LaunchData from './LaunchData'
import MakeProfile from './MakeProfile'
import MakeRequest from './MakeRequest'
import Nav from './Nav'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Requests from './Requests'
import Welcome from './Welcome'

const App = () => {
  return (
    <>
      <LaunchData />
      <CssBaseline/>
      <Nav />
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '90vh',
        alignContent: 'flex-start',
        bgcolor: 'primary'
      }}
      >
        <Router>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/makeprofile' component={MakeProfile} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/requests/new' component={MakeRequest} />
          <Route exact path='/requests' component={Requests} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/edit' component={UpdateProfile} />


        </Router>
        <Footer />
      </Box>
    </>
  )
}

export default connect()(App)
