import React, { useState } from 'react';
import { connect } from 'react-redux';

import Logout from './Logout'
import Login from './Login'
import Register from './Register'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'


function Nav({ currentUser }) {


  // const useStyles = makeStyles({
  //   logo: {
  //     maxWidth: 160,
  //   }
  // })
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logout = () => {
    <Logout/>
  }


  return (
    
    <Box sx={{ flexGrow: 1, zIndex: 10 }}>

      <AppBar position="static" sx={{ background: '#91A6FF' }}  >
        <Toolbar>
          {/* <Box sx={{ width: 30, height: 30}}>  */}
          <Link href='/dashboard'>
          <img sx={{ width: 3, height: 3}} src='images/logofull.png' alt="logo" className='image' />

          </Link>
          {/* </Box> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ 
            display: { 
              xs: 'none', 
              md: 'flex' 
              } 
          }}>
            { currentUser && 
            <Stack sx={{pt: 0, pr: 2,}} direction='row' spacing={1}>
              <Login/>
              <Register/>
            </Stack>}
            {/* <Box sx={{my: 'auto'}}> */}
            <IconButton color='inherit'  onClick={handleMenu}>
            <AccountCircle  fontSize='large'/>
            </IconButton>
            {/* </Box> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href='/dashboard'><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
                <Link href='/profile'><MenuItem>My Profile</MenuItem></Link>
                {/* <MenuItem onClick={logout}>Logout</MenuItem> */}
                <MenuItem><Logout/></MenuItem>
              </Menu>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
function mapState2Props (globalState) {
  return {
    currentUser: globalState.currentUser
  }
}

export default connect(mapState2Props)(Nav)
