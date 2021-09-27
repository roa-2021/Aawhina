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

import Logout from './Logout'


function Nav() {
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
    <Box 
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar>
          <Link 
            href='/'
            color="inherit"
            sx={{
              textDecoration: "none"
            }}
          >
            Āwhina
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ 
            display: { 
              xs: 'none', 
              md: 'flex' 
              } 
          }}>
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
                <Link href='/dashboard'><MenuItem>My Profile</MenuItem></Link>
                <MenuItem><Logout/></MenuItem>
              </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default connect()(Nav)

