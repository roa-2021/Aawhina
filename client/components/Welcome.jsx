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
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/background.png',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
]

function Welcome (props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  const [profileExists, setprofileExists] = React.useState(false)

  const checkProfile = (user) => {
    getUser(user.email)
    .then ((user) => {
      if (user) {
        setprofileExists(true)
      }
    })
  }

  if (isAuthenticated) {
    checkProfile(user)
    return (
      <>
     {profileExists ? < Dashboard user={user}/> : <MakeProfile user={user}/> }
    </>
    )
  }


  return (

   <>
      <Stack sx={{ pt: 10 }}direction="row" justifyContent="center">
        <Typography  component='h1' variant='h3'>Welcome to Āwhina!</Typography>
      </Stack>
      <Stack sx={{ pt: 20 }}direction="row" spacing={25}justifyContent="center">
        <Login/>
        <Register/>
      </Stack>

      <ImageList
      sx={{ width: 500, height: 500 }}
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

export default connect()(Welcome)

