import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import { purple } from '@material-ui/core/colors'
import { useAuth0 } from '@auth0/auth0-react'
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
import { fontWeight } from '@mui/lab/node_modules/@mui/system'

const theme = createTheme({
  palette: {
    primary: {
      main: '#91A6FF'
    },
    secondary: {
      main: '#3358FF'
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    }
  },
  typography: {
    // fontFamily: 'Domine',
    // fontFamily: 'Josefin Sans',
    // fontFamily: 'Lato',
    // fontFamily: 'Lobster',
    fontFamily: 'Lora',
    // fontFamily: 'Merriweather',
    

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightHeavy: 700,
  }
})

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  else if (isAuthenticated) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
} else {
  return (
    <ThemeProvider theme={theme}>
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
      <Welcome />
      <Footer />
    </Box>
  </ThemeProvider>
  )
}

}

export default connect()(App)
