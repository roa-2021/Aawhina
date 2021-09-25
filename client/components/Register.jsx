import React from 'react'
import toggleLoginForm from './Welcome'
import connect from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'



function Register ()  {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  // loginWithRedirect({ appState: {targetUrl: window.location.pathname } })

  return (

    <>

  <Button variant='contained' size='large' onClick={() => loginWithRedirect({ appState: {targetUrl: window.location.pathname } })}>Register</Button>
  </>

  )}
  

export default Register