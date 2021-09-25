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
<<<<<<< HEAD
import Footer from './Footer'
import Nav from './Nav'
||||||| aaab3e3
import nav from './Nav'
=======
>>>>>>> 1c2c59c5266bb1e7c5acd9bbeb5cf22647ad83be
import Login from './Login'
import Logout from './Logout'
<<<<<<< HEAD
import MakeProfile from './MakeProfile'
||||||| 1c2c59c
=======
import MakeRequest from './MakeRequest'

const App = (props) => {
  const { dispatch } = props
>>>>>>> 4bf92f78389c6f25187b73b3296fed44233e3484

  useEffect(() => {
    dispatch(getOffersThunk())
    dispatch(getRequestsThunk())
    dispatch(getUsersThunk())
  
  }, [])
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
<<<<<<< HEAD
        <Route path='/' component={Footer} />
||||||| 1c2c59c
=======
        <Route exact path='/requests/new' component={MakeRequest} />
>>>>>>> 4bf92f78389c6f25187b73b3296fed44233e3484
      </Router>
      </Box>
    </>
  )
}

<<<<<<< HEAD
export default connect()(App)
||||||| 1c2c59c
export default App
=======

export default connect()(App)
>>>>>>> 4bf92f78389c6f25187b73b3296fed44233e3484
