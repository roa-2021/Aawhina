import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { connect } from 'react-redux';
import  Link  from '@mui/material/Link'
import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

import Logout from './Logout'


function Nav() {


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
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" style={{ background: '#91A6FF' }}  >
        <Toolbar>
          {/* <Box sx={{ width: 30, height: 30}}>  */}
          <Link href='/dashboard'>
          <img sx={{ width: 3, height: 3}} src='images/logofull.png' alt="logo" className='image' />
          </Link>
          {/* </Box> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

             <AccountCircle onClick={handleMenu}/>
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

export default connect()(Nav)

