import React from 'react'
import toggleLoginForm from './Welcome'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Logout from './Logout'
import LoginIcon from '@mui/icons-material/Login'

function Login ()  {
  const { loginWithRedirect } = useAuth0()
  // loginWithRedirect({ appState: {targetUrl: window.location.pathname } })

  return (

    <>

  <Button variant='contained' size='large' endIcon={<LoginIcon/>} onClick={() => loginWithRedirect()}>Log In</Button>
  </>

  )}
  

  export default connect()(Login) 