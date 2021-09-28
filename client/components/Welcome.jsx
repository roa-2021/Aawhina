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



function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: './images/neighbours.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/happy.jpg',
  },
  {
    img: './images/background.png',
    cols: 2,
  },
  {
    img: './images/grocery.jpg',
    cols: 2,
  },
  {
    img: './images/apples.jpeg',
    title: 'Fern',
  },
]

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
      <Stack sx={{ pt: 10, pr: 20 }}direction="row" justifyContent="right">
        <Typography  component='h1' variant='h3'>Welcome to Āwhina!</Typography>
      </Stack>
      <Stack sx={{ pt: 20, pr: 17 }}direction="row" spacing={25}justifyContent="right">
        <Login/>
        <Register/>
      </Stack>

      <ImageList
      sx={{ pl: 10, pb: 60, width: 680, height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>




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

