import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getOffersThunk} from '../actions/offers'
import { getRequestsThunk} from '../actions/requests'
import { getUsersThunk} from '../actions/users'
import Welcome from './Welcome'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Requests from './Requests'
// import Register from './Register'
import Dashboard from './Dashboard'
import Login from './Login'
import Logout from './Logout'
import MakeRequest from './MakeRequest'
import MakeProfile from './MakeProfile'

const App = (props) => {
  const { dispatch } = props

  useEffect(() => {
    dispatch(getOffersThunk())
    dispatch(getRequestsThunk())
    dispatch(getUsersThunk())
  
  }, [])
  return (
    <>
      <CssBaseline/>
      {/* <Nav /> */}
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
        {/* <Route exact path='/' component={Welcome} /> */}
        <Route exact path='/makeprofile' component={MakeProfile} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/requests/new' component={MakeRequest} />
      </Router>
      </Box>
    </>
  )
}


export default connect()(App)
