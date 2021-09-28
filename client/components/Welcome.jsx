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
    <Stack sx={{ pt: 2, pr: 5}}direction="row">

      <Box
        sx={{
          ml: 5,
          pl: 20,
          height: 700,
          width: 400,
          border: '1px dashed grey'
        }}>
          <Image width='400' src="./images/Screenshot.png" cover={true}/>
      </Box>

      <Box sx={{border: '1px dashed grey'}} justifyContent="right">
        <Typography  component='h1' variant='h3'>Welcome to Āwhina!</Typography>
    
        <Stack sx={{ pt: 20, pr: 17 }}direction="row" spacing={25}justifyContent="right">
          <Login/>
          <Register/>
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

