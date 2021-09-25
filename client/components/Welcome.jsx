import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import MakeProfile from './MakeProfile'
import Register from './Register'
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
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  if (isAuthenticated) {
    return (
      <>
    <MakeProfile/>
    {/* <h2>{user.email}</h2> */}
    {/* {console.log(user.email)} */}
    </>
    )
  }


  return (
   <>
      <Stack sx={{ pt: 10 }}direction="row" justifyContent="center">
        <Typography  component='h1' variant='h3'>Welcome</Typography>
      </Stack>
      <Stack sx={{ pt: 20 }}direction="row" spacing={25}justifyContent="center">
        <Login/>
        <Register/>
      </Stack>
    </>
    )

}

export default connect()(Welcome)

    // <>
    //   <Stack sx={{ pt: 10 }}direction="row" justifyContent="center">
    //     <Typography  component='h1' variant='h3'>Welcome</Typography>
    //   </Stack>
    //   <Stack sx={{ pt: 20 }}direction="row" spacing={25}justifyContent="center">
    //     <Login/>
    //     <Register/>
    //   </Stack>
    //   isAuthenticated && (

    //     <Dashboard/>
    //   )