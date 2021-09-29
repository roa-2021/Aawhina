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
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


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
          zIndex: 0,
          // border: '1px dashed pink'
        }}
        direction="row" 
        spacing={25}
        justifyContent="right"
      >
          <Image 
            src="./images/Screenshot.png" 
            cover={true} 
            imageStyle={{height: '100%'}}
          />
      </Box>

      <Box sx={{mt: 4, width: '50%'}}>
            <Typography align='center' component='h1' variant='h3'>Welcome to Āwhina!</Typography>
            <Typography sx={{ fontStyle: 'oblique', m: 1 }} align='center'> āwhina (verb) to assist, help, support, benefit.</Typography>
        
            <Stack sx={{ pt: 9, pr: 10, pl: 10}}direction="column" spacing={10}>
              <Typography variant='body1'>
                Āwhina is a place for you to offer help to those in your community, where it is needed the most. Born out of lockdown when so many of us had time to give, or 
                were in need of extra support but didn't know where to find it. Āwhina aims to lower those barriers between you and your neighbours.
              </Typography>
              <Typography variant='body1'>
                How it works: <br></br>
                If you need help you can post a request to the noticeboard where others can then respond with offers of help. If you have time and the capacity to offer support, you 
                can browse listings from those that live nearby.
              </Typography>
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

