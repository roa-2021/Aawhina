import React from 'react'
import toggleLoginForm from './Welcome'
import connect from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Logout from './Logout'



function Login ()  {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()

  return (

    <>

  <Button variant='contained' size='large' onClick={() => loginWithRedirect()}>Register/Log In</Button>
  </>

  )}
  

export default Login