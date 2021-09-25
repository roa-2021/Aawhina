import React from 'react'
import toggleLoginForm from './Welcome'
import connect from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'



function Register ()  {
  const { loginWithRedirect } = useAuth0()
 

  return (

    <>

  <Button variant='contained' size='large'  endIcon={<AppRegistrationIcon/>} onClick={() => loginWithRedirect({ screen_hint: 'signup' }
  )}>Register</Button>
  </>

  )}
  

  export default connect()(Register) 