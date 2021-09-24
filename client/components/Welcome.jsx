import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Register from './MakeProfile'
import Link from 'react-router-dom'
import Logout from './Logout'
import Nav from './Nav'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useAuth0 } from '@auth0/auth0-react'

function Welcome () {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Stack sx={{ pt: 10 }}direction="row" justifyContent="center">
        <Typography  component='h1' variant='h3'>Welcome</Typography>
      </Stack>
      <Stack sx={{ pt: 20 }}direction="row" spacing={25}justifyContent="center">
        <Login/>
        <Logout/>
      </Stack>

      isAuthenticated && (
      {console.log(user)}
        <h1>Hi</h1>
    )
    </>
  )
}

// export default connect()(Welcome)
export default Welcome
