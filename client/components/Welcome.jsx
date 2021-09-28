import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { getUser } from '../apis/users_api'

import Login from './Login'
import Dashboard from './Dashboard'
import MakeProfile from './MakeProfile'
import Register from './Register'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import LaunchData from './LaunchData'
import Image from 'material-ui-image'
import Box from '@mui/material/Box'


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
   
    {/* <LaunchData /> */}
    <Stack sx={{ pt: 0, pr: 0}}direction="row">

      <Box
        sx={{
          pt: 0, 
          pr: 0, 
          width: '50%', 
        }}direction="row" spacing={25}justifyContent="right">
          <Image  src="./images/Screenshot.png" cover={true} />
      </Box>

      <Box sx={{width: '50%' }} alignItems="center" justifyContent="center">
        <Typography sx={{ pt: 7, pr: 0, pl: 10}} component='h1' variant='h3'>Welcome to Āwhina!</Typography>
    
        <Stack sx={{ pt: 9, pr: 10, pl: 10}}direction="row" spacing={25}justifyContent="right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim 
            enim sit. A lacus vestibulum sed arcu non odio. Odio facilisis mauris sit amet massa vitae. Vel facilisis volutpat est velit egestas dui id ornare arcu. Interdum varius 
            sit amet mattis. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Odio eu feugiat pretium nibh ipsum consequat nisl..</p>
        </Stack>
      </Box>
 
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

