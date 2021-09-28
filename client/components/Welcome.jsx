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
import { getUser } from '../apis/users_api'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import LaunchData from './LaunchData'




function Welcome ({currentUser}) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  // const [profileExists, setprofileExists] = React.useState(false)

  // const checkProfile = (user) => {
  //   getUser(user.email)
  //   .then ((user) => {
  //     if (user) {
  //       setprofileExists(true)
  //     }
  //   })
  // }

  if (isAuthenticated) {
    // checkProfile(user)
    return (
      <>
      <LaunchData />
     {currentUser ? < Dashboard user={currentUser}/> : <MakeProfile /> }
    </>
    )
  }
  return (
   <>

    <LaunchData />
    <Stack sx={{ pt: 10, pr: 20 }}direction="column">
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 400, md: 167 },
          maxWidth: { xs: 400, md: 250 },
        }}
        alt="Neighbours looking out their windows."
        src="./images/Screenshot.png"
      />

    </Stack>
    <Stack sx={{ pt: 10, pr: 20 }}direction="row" justifyContent="right">
        <Typography  component='h1' variant='h3'>Welcome to Āwhina!</Typography>
    </Stack>
    <Stack sx={{ pt: 20, pr: 17 }}direction="row" spacing={25}justifyContent="right">
      <Login/>
      <Register/>
    </Stack>

    </>
  )
}

function mapState2Props (globalState) {
  return {
    offers: globalState.offers,
    requests: globalState.requests,
    users: globalState.users,
    currentUser: globalState.currentUser
    }
  }


export default connect(mapState2Props)(Welcome)

